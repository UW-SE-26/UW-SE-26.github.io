import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
} from "react-vis";

function HorizontalBarChart(props) {
  return (
    <div>
      <XYPlot height={300} width={300} yType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={props.data} />
      </XYPlot>
    </div>
  );
}

export default HorizontalBarChart;
