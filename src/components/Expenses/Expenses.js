import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (filterValue) => {
        setFilteredYear(filterValue);
        console.log(filterValue);
    };

    return(
        <Cards className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
        </Cards>
    );
}

export default Expenses;