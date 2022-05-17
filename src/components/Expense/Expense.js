
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {  //props contain all the data from parent

    const [year1,year2] = useState('2020');
    const myfunc = year =>{
        // console.log(year);
        // console.log('Expense.js');
        year2(year);
    };

    const filteredYearExpenses = props.items.filter( x => {
        return x.date.getFullYear().toString() === year1;
    });

    
     
    return(
    <Card className='expenses'>
        <ExpensesFilter secondprop={year1} onChangeItem = {myfunc}></ExpensesFilter>
        <ExpenseChart expenses= {filteredYearExpenses}></ExpenseChart>
        <ExpensesList items = {filteredYearExpenses}></ExpensesList>
        {/* <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date} />
        <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date} />   
        <ExpenseItem
            title={props.items[2].title}    
            amount={props.items[2].amount}
            date={props.items[2].date} />
        <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date} /> */}
        
    </Card>

    );
}

export default Expenses;