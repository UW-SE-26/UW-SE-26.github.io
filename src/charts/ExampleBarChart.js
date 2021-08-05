import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  VerticalBarSeries,
} from "react-vis";

function ExampleBarChart(props) {
  const [crosshairValues, setCrosshairValues] = useState([]);

  return (
    <div>
      <XYPlot
        height={300}
        width={300}
        xType="ordinal"
        onMouseLeave={() => setCrosshairValues([])}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={props.data} onNearestX={(value, {index}) => setCrosshairValues([{"x": props.data.map(d => d["x"])[index], "y": props.data.map(d => d["y"])[index]}])} />
        <Crosshair values={crosshairValues} />
      </XYPlot>
    </div>
  );
}

export default ExampleBarChart;