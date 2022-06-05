import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
    })
    .map((expense) => {
      return <ExpenseItem key={expense.id} expenseItem={expense} />;
    });

  return (
    <div>
      <ExpensesFilter onFilterChanged={expenseFilterHandler} />
      <Card className="expenses">
        <ExpensesList expenses={filteredExpenseList} />
      </Card>
    </div>
  );
};

export default Expenses;
