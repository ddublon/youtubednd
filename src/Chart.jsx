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

  const options = {
    width: (screen.width / numberOfGraphs) * 0.88,
    height: 500,
    scales: {
      x: {
        time: false,
        range: [-0.5, 5.5],
      },
      y: {},
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
      <GreenLine chartHeight={270} setLineHeight={() => {}} />
      <PurpleLine chartHeight={220} setLineHeight={() => {}} />
    </div>
  );
};

export default Chart;
