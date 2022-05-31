import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css'

function Expenses (props) {

    return(
        <Card className='expenses'>
            {props.expenses.map((expenseItem) => {
                return (<ExpenseItem expenseItem={expenseItem} />);
            })}
        </Card>
    );
}

export default Expenses