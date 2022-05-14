import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [year1,year2]=useState('2020');
    const myfunc = year =>{
        // console.log(year);
        // console.log('Expense.js');
        year2(year);
    };
    return(
    <Card className='expenses'>
        <ExpensesFilter secondprop={year1} onChangeItem = {myfunc}></ExpensesFilter>
        {props.items.map(expense =><ExpenseItem 
                                        title={expense.title}
                                        amount={expense.amount}
                                        date={expense.date} >
                                    </ExpenseItem>)}
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