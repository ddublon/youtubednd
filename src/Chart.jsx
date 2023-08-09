import React from "react";
import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";
import GreenLine from "./GreenLine";
import PurpleLine from "./PurpleLine";

const Chart = ({ numberOfGraphs }) => {
  const data = [
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
  ];
  let maxRange = 5;
  let minRange = 0;

  const options = {
    width: (screen.width / numberOfGraphs) * 0.88,
    height: 500,
    scales: {
      x: {
        time: false,
      },
      y: {
        range: [minRange, maxRange],
      },
    },
    axes: [{}],
    series: [
      {},
      {
        stroke: "blue",
      },
    ],
  };
  return (
    <div style={{ position: "relative" }}>
      <UplotReact
        options={options}
        data={data}
        onCreate={(chart) => {}}
        onDelete={(chart) => {}}
      />
      <GreenLine LineHeight={270} maxRange={maxRange} minRange={minRange} />
      <PurpleLine LineHeight={220} maxRange={maxRange} minRange={minRange} />
    </div>
  );
};

export default Chart;
