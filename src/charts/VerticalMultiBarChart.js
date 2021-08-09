import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  Crosshair,
} from "react-vis";

function VerticalMultiBarChart(props) {
  const [crosshairValues, setCrosshairValues] = useState([]);

  return (
    <div>
      <XYPlot width={300} height={300} stackBy="y">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          data={props.data[0]}
          onNearestX={(value, { index }) =>
            setCrosshairValues(props.data.map((d) => d[index]))
          }
        />
        <VerticalBarSeries data={props.data[1]} />
        <Crosshair values={crosshairValues} />
      </XYPlot>
    </div>
  );
}

export default VerticalMultiBarChart;
