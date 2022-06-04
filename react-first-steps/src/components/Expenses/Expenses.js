import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2019')

    const expenseFilterHandler = (year) => {
        setSelectedYear(year);
    };

    return(
        <div>
            <ExpensesFilter onFilterChanged={expenseFilterHandler}/>
            <Card className='expenses'>
                {props.expenses.map((expenseItem) => {
                    if(expenseItem.date.getFullYear().toString() !== selectedYear) return null;

                    return (<ExpenseItem key={expenseItem.id} expenseItem={expenseItem} />);
                })}
            </Card>
        </div>
    );
}

export default Expenses