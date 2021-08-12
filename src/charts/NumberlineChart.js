import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  VerticalRectSeries,
  LabelSeries,
} from "react-vis";

function NumberLineChart(props) {
  const [crosshairValues, setCrosshairValues] = useState([]);

  //Accept a standard data.js x,y array, make it easier to type
  const rawdata = props.data;
  const totalLabels = rawdata.length;

  //Total number of respondents and the seperation between blocks
  var totalRecords = 0;
  for (let i = 0; i < totalLabels; i++) {
    totalRecords = totalRecords + rawdata[i]["y"];
  }
  const seperation = totalRecords / 50;

  //Format the Array so that RectSeries can use it, and take out the label for LabelSeries while defining y pos and fontsize
  var FormattedArray = [];
  var LabelsArray = [];
  var tX = 0;
  for (let i = 0; i < totalLabels; i++) {
    var newX = tX + rawdata[i]["y"];
    FormattedArray.push({ x0: tX, x: newX, y0: 0, y: 10 });
    LabelsArray.push({
      x: (tX + newX) / 2,
      y: -2,
      label: rawdata[i]["x"],
      style: { fontSize: 10 },
    });
    tX = newX + seperation;
  }

  const arrayToUse = FormattedArray;

  return (
    <div>
      <XYPlot
        height={150}
        width={450}
        onMouseLeave={() => setCrosshairValues([])}
      >
        <LabelSeries data={LabelsArray} labelAnchorX={"middle"} />
        <VerticalRectSeries
          data={arrayToUse}
          onNearestX={(value, { index }) =>
            setCrosshairValues([
              {
                x: LabelsArray.map((d) => d["label"])[index],
                y: rawdata.map((d) => d["y"])[index],
              },
            ])
          }
        />
        <Crosshair values={crosshairValues} />
      </XYPlot>
    </div>
  );
}

export default NumberLineChart;
