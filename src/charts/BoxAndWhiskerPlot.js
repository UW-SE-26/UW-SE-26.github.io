import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  VerticalRectSeries,
  WhiskerSeries,
  LabelSeries,
} from "react-vis";

function BoxAndWhiskerPlot(props) {
  const [crosshairValues, setCrosshairValues] = useState([]);

  //Accept an array with x Labels, and a list of y values per label, Make it easier to type
  const rawdata = props.data;
  const totalLabels = rawdata.length;

  //Define bar thickness and the seperation between each bar. Also define median thickness. Also monitor the max value in order to manage yDomain
  const barThickness = 3.5;
  const seperation = barThickness / 3;
  const medianThicknessHalf = 0.1;
  var plotMaxY = 0;

  var tX = seperation;
  var MainRectSeriesArray = [];
  var WhiskerSeriesArray = [];
  var MedianRectSeriesArray = [];
  var LabelSeriesArray = [];
  for (let i = 0; i < totalLabels; i++) {
    var newX = tX + barThickness;

    //Prepare data for the main RectSeries
    var workingList = rawdata[i]["y"].sort((a, b) => a - b);
    var workingListLength = workingList.length;
    var medianIndex = workingListLength / 2;

    if (medianIndex % 2 !== 0) {
      var upperLimit = medianIndex - 0.5;
      var lowerLimit = medianIndex + 0.5;
    } else {
      var upperLimit = medianIndex;
      var lowerLimit = medianIndex;
    }
    var lowerHalf = workingList.slice(0, upperLimit + 1);
    var upperHalf = workingList.slice(lowerLimit, workingListLength);

    function findMedian(ar) {
      var halfLocation = ar.length / 2;
      if (halfLocation % 1 !== 0) {
        var median = ar[halfLocation - 0.5];
      } else {
        var median = (ar[halfLocation - 1] + ar[halfLocation]) / 2;
      }
      return median;
    }

    var lowerQuartile = findMedian(lowerHalf);
    var upperQuartile = findMedian(upperHalf);

    //Prepare data for WhiskerSeries. Also update maxYvalue for yDomain
    var minValue = workingList[0];
    var maxValue = workingList[workingListLength - 1];
    var whiskerlocation = (minValue + maxValue) / 2;
    var whiskerVariance = (whiskerlocation - minValue) * 2;
    if (maxValue > plotMaxY) {
      plotMaxY = maxValue;
    }

    //Prepare data for the median's RectSeries
    var overallMedian = findMedian(workingList);

    //Push coordinates
    MainRectSeriesArray.push({
      x0: tX,
      x: newX,
      y0: lowerQuartile,
      y: upperQuartile,
    });
    WhiskerSeriesArray.push({
      x: (tX + newX) / 2,
      y: whiskerlocation,
      yVariance: whiskerVariance,
    });
    MedianRectSeriesArray.push({
      x0: tX,
      x: newX,
      y0: overallMedian - medianThicknessHalf,
      y: overallMedian + medianThicknessHalf,
      median: overallMedian,
    });
    LabelSeriesArray.push({
      x: (tX + newX) / 2,
      y: -5.5,
      label: rawdata[i]["x"],
      style: { fontSize: 10 },
    });

    tX = newX + seperation;
  }

  return (
    <div>
      <XYPlot
        height={300}
        width={totalLabels * (barThickness * 16.5)}
        xDomain={[0, totalLabels * (barThickness * 1.35) + seperation * 1.1]}
        yDomain={[0, plotMaxY * 1.1]}
        onMouseLeave={() => setCrosshairValues([])}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis hideTicks />
        <YAxis />
        <LabelSeries data={LabelSeriesArray} labelAnchorX={"middle"} />
        <VerticalRectSeries
          data={MainRectSeriesArray}
          onNearestX={(value, { index }) =>
            setCrosshairValues([
              {
                x: LabelSeriesArray.map((d) => d["label"])[index],
                y: MedianRectSeriesArray.map((d) => d["median"])[index],
              },
            ])
          }
        />
        <VerticalRectSeries color={"#164b80"} data={MedianRectSeriesArray} />
        <WhiskerSeries
          className="whisker-series-example"
          data={WhiskerSeriesArray}
          color={"#164b80"}
        />
        <Crosshair values={crosshairValues} />
      </XYPlot>
    </div>
  );
}

export default BoxAndWhiskerPlot;
