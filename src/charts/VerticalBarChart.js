import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  VerticalBarSeries,
} from "react-vis";

function VerticalBarChart(props) {
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
        <VerticalBarSeries
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

export default VerticalBarChart;
