import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  
  const clickHandler = () => {
    console.log('Clicked!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenseItem.date}/>
      <div className='expense-item__description'>
        <h2>{props.expenseItem.title}</h2>
        <div className='expense-item__price'>{props.expenseItem.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
