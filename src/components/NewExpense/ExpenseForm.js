import './ExpenseForm.css'
import React from 'react'

function ExpenseForm() {

    const titleChangeHandler = (event)=>{
        console.log(event.target.value);
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' id='ip' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" id='ip'></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2025-01-01" id='ip'></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;