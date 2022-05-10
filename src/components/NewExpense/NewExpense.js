import React from 'react' 
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const onSaveExpenseHandler = (fromExpenseForm) =>{
        const expenseData = {
            ...fromExpenseForm,
            id : Math.random().toString()
        };
        //console.log(expenseData);       //now here it will log instead of ExpenseForm.js's log 49 line
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseHandler}>
            </ExpenseForm>
        </div>
    );
}

export default NewExpense;