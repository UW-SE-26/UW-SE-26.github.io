import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  MarkSeries,
} from "react-vis";

  function ExampleWeightedScatterPlot(props) {
    const [crosshairValues, setCrosshairValues] = useState([]);

    return (
      <div>
        <XYPlot width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries
            className="weighted-scatterplot"
            opacity="0.6"
            sizeRange={[5, 15]}
            data={props.data}
            onNearestX={(value, {index}) => setCrosshairValues([{"x": props.data.map(d => d["x"])[index], "y": props.data.map(d => d["y"])[index]}])}
          />
          <Crosshair values={crosshairValues} />
        </XYPlot>
      </div>
        
    );
  }
  
export default ExampleWeightedScatterPlot;