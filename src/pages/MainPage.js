import React from "react";
import ExampleBarChart from "../charts/ExampleBarChart"
import ExampleLineChart from "../charts/ExampleLineChart"
import { data_example_bar, data_example_line } from "../data"

function MainPage() {
  return (
    <div>
      <p>UW SE 26 Class Profile</p>
      <ExampleBarChart data={data_example_bar} />
      <ExampleLineChart data={data_example_line} />
    </div>
  );
}

export default MainPage;
