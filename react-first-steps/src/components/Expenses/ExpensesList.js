import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return <ul className="expenses-list">{props.expenses}</ul>;
};

export default ExpensesList;
