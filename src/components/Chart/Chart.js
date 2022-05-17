import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = props => {
    const eachval = props.items.map(item=> item.value);     //will update " props.items" array to only array of numbers of "item.value i.q 12 int values"
    const totalmax = Math.max(...eachval);

    return <div className="chart">
        {props.items.map(items => 
        <ChartBar
            key={items.label}
            value={items.value}
            maxValue={totalmax}     //add totalmax here
            label={items.label} >
        </ChartBar>)}
        {/* we are doing above like this to render as many <ChartBar> compnents as required in props */}
    </div>;
};

export default Chart;