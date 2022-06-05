import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e2",
    title: "Boat Insurance",
    amount: 342.88,
    date: new Date(2020, 1, 19),
  },
  {
    id: "e3",
    title: "Home Insurance",
    amount: 472.67,
    date: new Date(2022, 5, 7),
  },
  {
    id: "e4",
    title: "Motorcycle Insurance",
    amount: 98.22,
    date: new Date(2022, 3, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onSaveExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
