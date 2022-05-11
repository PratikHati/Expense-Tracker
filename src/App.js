import Expenses from "./components/Expense/Expense";
import React from "react";
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const myfunc = (fromNewExpense) =>{
      console.log('data received in App.js');   //now it will print here instead of NewExpress.js
      console.log(fromNewExpense);
  }
  return (

    // JSX SYNTAX
    <div>
      {/* child to parent prop */}
      <NewExpense onAddExpense ={myfunc} ></NewExpense> 
      
      {/* Parent to child prop*/}
      <Expenses items={expenses}></Expenses>           
    </div>

  );
}

export default App;
