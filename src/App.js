import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "first",
      amount: 450,
      date: new Date(2021, 2, 28),
    },
    {
      title: "second",
      amount: 150,
      date: new Date(2021, 3, 1),
    },
    {
      title: "third",
      amount: 550,
      date: new Date(2021, 4, 14),
    },
  ];

  return (
    <div>
      <h2>This is a test</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
