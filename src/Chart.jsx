import React from "react";
import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";

const Chart = ({numberOfGraphs}) => {
  const data = [
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
  ];

  const options = {
    width: (window.innerWidth / 3) * 0.88,
    height: 300,
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
    <UplotReact
      options={options}
      data={data}
      onCreate={(chart) => {}}
      onDelete={(chart) => {}}
    />
  );
};

export default Chart;
