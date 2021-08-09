import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  HorizontalBarSeries,
} from "react-vis";

function HorizontalBarChart(props) {
  const [crosshairValues, setCrosshairValues] = useState([]);

  return (
    <div>
      <XYPlot
        height={300}
        width={300}
        xType="ordinal"
        onMouseLeave={() => setCrosshairValues([])}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries
          data={props.data}
          onNearestX={(value, { index }) =>
            setCrosshairValues([
              {
                x: props.data.map((d) => d["x"])[index],
                y: props.data.map((d) => d["y"])[index],
              },
            ])
          }
        />
        <Crosshair values={crosshairValues} />
      </XYPlot>
    </div>
  );
}

export default HorizontalBarChart;
