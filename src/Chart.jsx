import * as React from "react";
import {
  SciChartSurface,
  NumberRange,
  CategoryAxis,
  SciChartJSDarkv2Theme,
  NumericAxis,
  RightAlignedOuterVerticallyStackedAxisLayoutStrategy,
  XyDataSeries,
  FastLineRenderableSeries,
  EllipsePointMarker,
  HorizontalLineAnnotation,
  ELabelPlacement,
} from "scichart";
import { vitalSignsEcgData } from "./vitalSignsEcgData";
const STEP = 2_200;
const TIMER_TIMEOUT_MS = 50;
const POINTS_LOOP = 44_000 * 5; // 5 seconds
const GAP_POINTS = STEP * 0.02;
const DATA_LENGTH = vitalSignsEcgData.xValues.length; // `5000 points

const { ecgHeartRateValues } = vitalSignsEcgData;

const getValuesFromData = (xIndex) => {
  const xArr = [];
  const ecgHeartRateArr = [];

  for (let i = 0; i < STEP; i++) {
    const dataIndex = (xIndex + i) % DATA_LENGTH;
    const x = xIndex + i;
    xArr.push(x);
    ecgHeartRateArr.push(ecgHeartRateValues[dataIndex]);
  }
  return {
    xArr,
    ecgHeartRateArr,
  };
};
// Function which creates YAxis's
const generateYAxisObjects = (count, wasmContext) => {
  const yAxisObjects = [];
  for (let i = 1; i <= count; i++) {
    const yAxisId = `yAxis${i}`;
    const yAxis = new NumericAxis(wasmContext, {
      id: yAxisId,
      useNativeText: true,
      allowFastMath: true,
      isVisible: true,
    });

    yAxisObjects.push(yAxis);
  }
  return yAxisObjects;
};

const addRenderableSeriesWithDynamicYAxis = (
  wasmContext,
  sciChartSurface,
  yAxisObjects,
  dataSeries,
  number
) => {
  const STROKE_THICKNESS = 2;
  const pointMarkerOptions = {
    width: 1,
    height: 1,
    strokeThickness: 2,
    // fill: "blue",
    stroke: "blue",
  };

  // Ensure the number is within the range of yAxisObjects
  if (number > 0 && number <= yAxisObjects.length) {
    const yAxis = yAxisObjects[number - 1]; // Arrays are 0-indexed, while number starts from 1
    sciChartSurface.renderableSeries.add(
      new FastLineRenderableSeries(wasmContext, {
        yAxisId: yAxis.id,
        strokeThickness: STROKE_THICKNESS,
        dataSeries,
        pointMarker: new EllipsePointMarker(wasmContext, {
          ...pointMarkerOptions,
        }),
      })
    );
    sciChartSurface.annotations.add(
      new HorizontalLineAnnotation({
        labelPlacement: ELabelPlacement.Axis,
        yAxisId: yAxis.id,
        showLabel: true,
        stroke: "Red",
        strokeThickness: 2,
        y1: 0.9, // use y1 from state here
        axisLabelFill: "Red",
        isEditable: true,
      })
    );
  } else {
    console.error(`Invalid number: ${number}`);
  }
};

const drawExample = async (numGraphs, divElementId) => {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create(
    divElementId,
    {
      theme: new SciChartJSDarkv2Theme(),
    }
  );

  console.log("POINTS_LOOP", POINTS_LOOP, numGraphs); // check if numGraphs is defined
  // Create shared X-axis
  const xAxis = new CategoryAxis(wasmContext, {
    visibleRange: new NumberRange(0, POINTS_LOOP),
    allowFastMath: true,
    isVisible: false,
  });
  sciChartSurface.xAxes.add(xAxis);

  const yAxes = generateYAxisObjects(numGraphs, wasmContext);
  // Create LayoutManager and set the rightOuterAxesLayoutStrategy
  if (sciChartSurface.layoutManager) {
    sciChartSurface.layoutManager.rightOuterAxesLayoutStrategy =
      new RightAlignedOuterVerticallyStackedAxisLayoutStrategy();
  }
  sciChartSurface.yAxes.add(...yAxes);

  const dataSeriesArray = []; // Array to hold the data series for each graph
  for (let i = 0; i < numGraphs; i++) {
    const fifoSweepingGap = GAP_POINTS;
    const dataSeries = new XyDataSeries(wasmContext, {
      dataIsSortedInX: true,
      containsNaN: false,
      fifoCapacity: POINTS_LOOP,
      fifoSweeping: true,
      fifoSweepingGap,
    });
    dataSeriesArray.push(dataSeries); // Push the data series to the array
    for (let i = 0; i < numGraphs; i++) {
      addRenderableSeriesWithDynamicYAxis(
        wasmContext,
        sciChartSurface,
        yAxes,
        dataSeries,
        i + 1
      );
    }
  }

  let timerId;
  const runUpdateDataOnTimeout = () => {
    const { xArr, ecgHeartRateArr } = getValuesFromData(currentPoint);
    currentPoint += STEP;

    for (let i = 0; i < numGraphs; i++) {
      const startIndex = i * STEP;
      const endIndex = startIndex + STEP;
      const xData = xArr.slice(startIndex, endIndex);
      const yData = ecgHeartRateArr.slice(startIndex, endIndex);
      dataSeriesArray[i].appendRange(xData, yData);
    }

    timerId = setTimeout(runUpdateDataOnTimeout, TIMER_TIMEOUT_MS);
  };

  const handleStop = () => {
    clearTimeout(timerId);
  };

  const handleStart = () => {
    console.log("handleStart");
    if (timerId) {
      handleStop();
    }
    runUpdateDataOnTimeout();
  };

  handleStart();

  return {
    sciChartSurface,
    wasmContext,
    controls: { handleStart, handleStop },
  };
};

let currentPoint = 0;

export default function Chart({ numGraphs, id }) {
  const sciChartSurfaceRef = React.useRef();
  const controlsRef = React.useRef();
  const divElementId = `chart-${id}`;
  React.useEffect(() => {
    console.log("useEffect", divElementId);
    let autoStartTimerId;
    const chartInitialization = async () => {
      const res = await drawExample(3, divElementId);
      sciChartSurfaceRef.current = res.sciChartSurface;
      controlsRef.current = res.controls;
      return res;
    };
    const chartInitializationPromise = chartInitialization();
    return () => {
      console.log("unmount", divElementId);
      let deleted = false;

      if (sciChartSurfaceRef.current) {
        clearTimeout(autoStartTimerId);
        controlsRef.current.handleStop();
        if (!deleted) {
          sciChartSurfaceRef.current.delete();
          deleted = true;
        }
        return;
      }

      (async () => {
        await chartInitializationPromise;
        clearTimeout(autoStartTimerId);
        controlsRef.current.handleStop();
        if (!deleted) {
          sciChartSurfaceRef.current.delete();
          deleted = true;
        }
        return;
      })();
    };
  }, []);

  return (
    <div style={{ height: "200px" }}>
      <div style={{ width: "100%", height: "100%" }} id={divElementId}></div>
      <button onClick={() => controlsRef.current?.handleStart()}>
        Start Timer
      </button>
      <button onClick={() => controlsRef.current?.handleStop()}>
        Stop Timer
      </button>
    </div>
  );
}
