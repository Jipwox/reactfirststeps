import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [formCollapsed, setFormCollapsed] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onSaveExpense(expenseData);
        collapseNewExpenseHandler();
    };

    const expandNewExpenseHandler = () => {
        setFormCollapsed(false);
    }

    const collapseNewExpenseHandler = () => {
        setFormCollapsed(true);
    }

    const addNewExpenseBtn = <button onClick={expandNewExpenseHandler}>Add New Expense</button>;

    const expenseForm = <ExpenseForm 
                            onSaveExpenseData={saveExpenseDataHandler} 
                            onCancelAddExpense={collapseNewExpenseHandler}    
                        />

    return(
        <div className='new-expense'>
            {formCollapsed && addNewExpenseBtn}
            {!formCollapsed && expenseForm}
        </div>
    );
};

export default NewExpense;