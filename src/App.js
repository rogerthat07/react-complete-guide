import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "first", amount: 450, date: new Date(2021, 2, 28) },
    { title: "second", amount: 150, date: new Date(2021, 3, 1) },
    { title: "third", amount: 550, date: new Date(2021, 4, 14) }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
