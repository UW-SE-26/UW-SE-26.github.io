import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

function ExampleChart(props) {
  return (
    <div>
      <XYPlot height={300} width={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={props.data} />
      </XYPlot>
    </div>
  );
}

export default ExampleChart;
