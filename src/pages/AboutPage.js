import React from "react";
import LineChart from "../charts/LineChart";
import VerticalBarChart from "../charts/VerticalBarChart";
import HorizontalBarChart from "../charts/HorizontalBarChart";
import VerticalMultiBarChart from "../charts/VerticalMultiBarChart";
import HorizontalMultiBarChart from "../charts/HorizontalMultiBarChart";
import WeightedScatterPlot from "../charts/WeightedScatterPlot";
import NumberLineChart from "../charts/NumberLineChart";
import BoxAndWhiskerPlot from "../charts/BoxAndWhiskerPlot";
import PieChart from "../charts/PieChart";

import {
  data_example_line,
  data_example_vertical_bar,
  data_example_horizontal_bar,
  data_example_vertical_multibar,
  data_example_horizontal_multibar,
  data_example_weighted_scatterplot,
  data_example_numberlinechart,
  data_example_box_and_whisker_plot,
  data_example_pie_chart,
} from "../data";

function AboutPage() {
  return (
    <div>
      About Page
      <p>UW SE 26 Class Profile</p>
      <LineChart data={data_example_line} />
      <VerticalBarChart data={data_example_vertical_bar} />
      <HorizontalBarChart data={data_example_horizontal_bar} />
      <VerticalMultiBarChart data={data_example_vertical_multibar} />
      <HorizontalMultiBarChart data={data_example_horizontal_multibar} />
      <WeightedScatterPlot data={data_example_weighted_scatterplot} />
      <NumberLineChart data={data_example_numberlinechart} />
      <BoxAndWhiskerPlot data={data_example_box_and_whisker_plot} />
      <PieChart data={data_example_pie_chart} />
    </div>
  );
}

export default AboutPage;
