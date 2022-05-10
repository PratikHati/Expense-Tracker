import './ExpenseForm.css'
import React, {useState} from 'react'

function ExpenseForm(props) {

    const [enteredTitle, EnteredTitle] = useState('');
    const [enteredAmount,EnteredAmount] = useState('')
    const [enteredDate,EnteredDate] = useState('')

    // const [enteredValue, changedValue] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event)=>{
        EnteredTitle(event.target.value);
        // changedValue({
        //     ...enteredValue,                    //keep rest 2 as it is
        //     enteredTitle: event.target.value    //update with new value
        // });
    };

    const amountChangeHandler = (event)=>{
        EnteredAmount(event.target.value);
        // changedValue({
        //     ...enteredValue,                    //keep rest 2 as it is
        //     enteredAmount: event.target.value    //update with new value
        // });
    };

    const dateChangeHandler = (event)=>{
        EnteredDate(event.target.value);
        // changedValue({
        //     ...enteredValue,                    //keep rest 2 as it is
        //     enteredDate: event.target.value    //update with new value
        // });
    };

    const submitHandler = (event) =>{
        event.preventDefault();     //inbuild in javascript
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);  //execute this pointer to NewExpense.js's 'onSaveExpenseHandler()'
        EnteredTitle('');
        EnteredAmount('');
        EnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>enteredTitle</label>
                    <input type='text' id='ip' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>enteredAmount</label>
                    <input type='number' min="0.01" step="0.01" id='ip' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>enteredDate</label>
                    <input type='date' min="2022-01-01" max="2025-01-01" id='ip' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;