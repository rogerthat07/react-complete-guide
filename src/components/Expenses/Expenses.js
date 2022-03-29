import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString()===filteredYear;
  });
  const filterChangeHandler = (filterValue) => {
    setFilteredYear(filterValue);
    console.log(filterValue);
  };

  return (
    <Cards className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />;
      })}
    </Cards>
  );
}

export default Expenses;
