import React from "react";
import ExampleLineChart from "../charts/ExampleLineChart";
import VerticalBarChart from "../charts/VerticalBarChart";
import HorizontalBarChart from "../charts/HorizontalBarChart";
import VerticalMultiBarChart from "../charts/VerticalMultiBarChart";
import HorizontalMultiBarChart from "../charts/HorizontalMultiBarChart";
import WeightedScatterPlot from "../charts/WeightedScatterPlot";
import NumberlineChart from "../charts/NumberlineChart";

import {
  data_example_line,
  data_example_vertical_bar,
  data_example_horizontal_bar,
  data_example_vertical_multibar,
  data_example_horizontal_multibar,
  data_example_weighted_scatterplot,
  data_example_numberlinechart
} from "../data";

function AboutPage() {
  return (
    <div>
      About Page
      <p>UW SE 26 Class Profile</p>
      <ExampleLineChart data={data_example_line} />
      <VerticalBarChart data={data_example_vertical_bar} />
      <HorizontalBarChart data={data_example_horizontal_bar} />
      <VerticalMultiBarChart data={data_example_vertical_multibar} />
      <HorizontalMultiBarChart data={data_example_horizontal_multibar} />
      <WeightedScatterPlot data={data_example_weighted_scatterplot} />
      <NumberlineChart data={data_example_numberlinechart}/>
    </div>
  );
}

export default AboutPage;
