import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React,{ useState} from "react";    //{ useState} is used for state concept if.e to reload a web page after being rendered

function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title);    //important as this array should have exactly 2 elements
                                                      //one before update, another after update

  function myclick(){
    setTitle('Updated!');       //when clicked, value will be changes as ExpenseItem() will reexecute 
    console.log(title);
  }

  return (

    <Card className='expense-item'>              {/* Card is a custom component as a result 'Card's css will take precidence than 'expense-item' css*/}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={myclick}>Click here</button>
    </Card>
  );
}

export default ExpenseItem; 