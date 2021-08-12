import React, { useState } from "react";
import { RadialChart } from "react-vis";

function PieChart(props) {

    return (
        <div>
            <RadialChart
                data={props.data}
                width={300}
                height={300}
                className />
        </div>
    );
}

export default PieChart;
