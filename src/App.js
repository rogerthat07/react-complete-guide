import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "first", amount: 450, date: new Date(2021, 2, 28) },
    { title: "second", amount: 150, date: new Date(2021, 3, 1) },
    { title: "third", amount: 550, date: new Date(2021, 4, 14) }
  ];

  return (
    <div>
      <h2>This is a test</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
