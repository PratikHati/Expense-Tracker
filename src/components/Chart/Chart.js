import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = props => {
    return <div className="chart">
        {props.items.map(items => 
        <ChartBar
            key={items.label}
            value={items.value}
            maxValue={null}
            label={items.label} >
        </ChartBar>)}
        {/* we are doing above like this to render as many <ChartBar> compnents as required in props */}
    </div>;
};

export default Chart;