import {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.expenseItem.title);

  const clickHandler = () => {
    setTitle("NootNoot!");
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenseItem.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.expenseItem.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
