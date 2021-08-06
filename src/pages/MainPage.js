import React from "react";
import ExampleBarChart from "../charts/ExampleBarChart"
import ExampleLineChart from "../charts/ExampleLineChart"
import ExampleMultiBarChart from "../charts/ExampleMultiBarChart"
import { data_example_bar, data_example_line, data_example_multibar, data_example_multibar2 } from "../data"

function MainPage() {
  return (
    <div>
      <p>UW SE 26 Class Profile</p>
      <ExampleBarChart data={data_example_bar} />
      <ExampleLineChart data={data_example_line} />
      <ExampleMultiBarChart data={data_example_multibar} data2={data_example_multibar2}/>
    </div>
  );
}

export default MainPage;