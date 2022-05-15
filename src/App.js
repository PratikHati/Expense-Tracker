import Expenses from "./components/Expense/Expense";
import React,{useState} from "react";
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
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
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const myfunc = (expenses) =>{   //"expenses" is a new object came from child NewExpense.js to add in current list
                                  // console.log('data received in App.js');   //now it will print here instead of NewExpress.js
                                  // console.log(fromNewExpense);
    

    //---------------important -------------------"setExpenses" function can be used when list must have new snapshots along with older snapshots

    setExpenses((prevState) =>{             //"prevState" is already existing list objects
      return [expenses,...prevState];       //[newonj,oldobjlist]
    });
  };

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
