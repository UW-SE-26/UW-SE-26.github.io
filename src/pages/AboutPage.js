import React from "react";
import ExampleBarChart from "../charts/ExampleBarChart";
import ExampleLineChart from "../charts/ExampleLineChart";
import VerticalMultiBarChart from "../charts/VerticalMultiBarChart";
import HorizontalMultiBarChart from "../charts/HorizontalMultiBarChart";
import {
  data_example_bar,
  data_example_line,
  data_vertical_multibar,
  data_horizontal_multibar,
} from "../data";


function AboutPage() {
  return (
    <div>
      About Page
      <p>UW SE 26 Class Profile</p>
      <ExampleBarChart data={data_example_bar} />
      <ExampleLineChart data={data_example_line} />
      <VerticalMultiBarChart
        data={data_vertical_multibar}
        data2={data_vertical_multibar}
      />
      <HorizontalMultiBarChart
        data={data_horizontal_multibar}
        data2={data_horizontal_multibar}
      />
    </div>
  );
}

export default AboutPage;