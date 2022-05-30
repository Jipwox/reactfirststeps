import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.expenses.date.toLocaleString('en-US', {month: 'long'})
  const day = props.expenses.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.expenses.date.getFullYear()

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.expenses.date}/>
      <div className='expense-item__description'>
        <h2>{props.expenses.title}</h2>
        <div className='expense-item__price'>{props.expenses.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
