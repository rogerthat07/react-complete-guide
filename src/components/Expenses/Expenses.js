import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
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
      {props.items.map((expense) => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />;
      })}
    </Cards>
  );
}

export default Expenses;
