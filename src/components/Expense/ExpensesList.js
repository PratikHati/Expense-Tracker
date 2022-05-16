import ExpenseItem from "./ExpenseItem";
import React from "react";
import "./ExpensesList.css";

const ExpensesList = props =>{
  

    if(props.items.length === 0){
        return (<h2 className="expenses-list__fallback">
                    Not Found
                </h2>);
    }
     

    return (<ul className="expenses-list">
                {props.items.map(expense =>
                <ExpenseItem 
            //we have to add a identifier so that react can add new objects
                    key = {expense.Id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} >
                </ExpenseItem>)}
            </ul>);
};

export default ExpensesList ;