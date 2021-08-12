import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  LineSeries,
} from "react-vis";

function ExampleLineChart(props) {
  const [crosshairValues, setCrosshairValues] = useState([]);

  return (
    <div>
      <XYPlot
        height={300}
        width={300}
        onMouseLeave={() => setCrosshairValues([])}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries
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

export default ExampleLineChart;