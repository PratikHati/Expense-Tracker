import React,{useState} from 'react' 
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [isEditing, setEditing] = useState(false);
    const onSaveExpenseHandler = (fromExpenseForm) =>{
        const expenseData = {
            ...fromExpenseForm,
            id : Math.random().toString()
        };
        //console.log(expenseData);       //now here it will log instead of ExpenseForm.js's log 49 line
        props.onAddExpense(expenseData);
        setEditing(false);              //here also need to add as this should false after adding new expense obj
    };

    const startEditingHandler = () =>{
        setEditing(true);
    };

    const stopEditingHandler = () =>{
        setEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onCancel={stopEditingHandler}></ExpenseForm>}
            
        </div>
    );
}

export default NewExpense;