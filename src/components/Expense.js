import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expenses(props) {

    return( 
    <Card>
        <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date} />
        
    </Card>
    );
}

export default Expenses;