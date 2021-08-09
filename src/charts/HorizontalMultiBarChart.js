import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
} from "react-vis";

function HorizontalMultiBarChart(props) {
  return (
    <div>
      <XYPlot width={300} height={300} stackBy="x">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={props.data[0]} />
        <HorizontalBarSeries data={props.data[1]} />
      </XYPlot>
    </div>
  );
}

export default HorizontalMultiBarChart;
