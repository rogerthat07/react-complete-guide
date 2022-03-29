import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "first", amount: 450, date: new Date(2021, 2, 28) },
  { id: 'e2', title: "second", amount: 150, date: new Date(2021, 3, 1) },
  { id: 'e3', title: "third", amount: 550, date: new Date(2021, 4, 14) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense expenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
