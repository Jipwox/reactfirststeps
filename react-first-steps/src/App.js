import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Boat Insurance",
      amount: 342.88,
      date: new Date(2021, 1, 19),
    },
    {
      id: "e3",
      title: "Home Insurance",
      amount: 472.67,
      date: new Date(2021, 5, 7),
    },
    {
      id: "e4",
      title: "Motorcycle Insurance",
      amount: 98.22,
      date: new Date(2021, 3, 10),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
