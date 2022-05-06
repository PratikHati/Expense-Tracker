import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from "react";

function ExpenseItem(props) {
  
  function myclick(){
    console.log('Clicked');
  }

  return (

    <Card className='expense-item'>              {/* Card is a custom component as a result 'Card's css will take precidence than 'expense-item' css*/}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={myclick}>Click here</button>
    </Card>
  );
}

export default ExpenseItem; 