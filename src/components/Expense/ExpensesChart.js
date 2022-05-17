import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = props =>{
    
    const ChartData = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},    
        {label:'Mar',value:0},    
        {label:'Apr',value:0},    
        {label:'May',value:0},    
        {label:'June',value:0},    
        {label:'July',value:0},    
        {label:'Aug',value:0},    
        {label:'Sept',value:0},    
        {label:'Oct',value:0},    
        {label:'Nov',value:0},    
        {label:'Dec',value:0},    

    ];
    //use "for of" loop for getMonth()
    for(const expense of props.expenses){       //from parent, retrive monyh and update that month's value to (expense.amount)
        const month = expense.date.getMonth();  //jan =0, feb =1
        ChartData[month].value += expense.amount;
    }

    return <Chart items={ChartData}></Chart>        //items prop used in child Chart.js and send ChartData[]
};

export default ExpenseChart;