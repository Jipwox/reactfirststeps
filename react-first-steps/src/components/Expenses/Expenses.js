import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const expenseFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenseList = props.expenses
    .filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChanged={expenseFilterHandler} />
        <ExpensesChart expenses={filteredExpenseList}/>
        <ExpensesList expenses={filteredExpenseList} />
      </Card>
    </div>
  );
};

export default Expenses;
