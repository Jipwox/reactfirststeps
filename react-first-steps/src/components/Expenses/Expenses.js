import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {

    return(
        <Card className='expenses'>
            {props.expenses.map((expenseItem) => {
                return (<ExpenseItem key={expenseItem.id} expenseItem={expenseItem} />);
            })}
        </Card>
    );
}

export default Expenses