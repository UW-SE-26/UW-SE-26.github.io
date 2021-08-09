import React from "react";
import ExampleBarChart from "../charts/ExampleBarChart"
import ExampleLineChart from "../charts/ExampleLineChart"
import ExampleWeightedScatterPlot from "../charts/ExampleWeightedScatterPlot"
import {data_example_bar, data_example_line, data_example_weighted_scatterplot} from "../data"

function MainPage() {
  return (
    <div>
      <p>UW SE 26 Class Profile</p>
      <ExampleBarChart data={data_example_bar} />
      <ExampleLineChart data={data_example_line} />
      <ExampleWeightedScatterPlot data ={data_example_weighted_scatterplot}/>
    </div>
  );
}

export default MainPage;
