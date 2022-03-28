import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Using multiple states
    const [titleEntered, setTitleEntered] = useState('');
    const [amountEntered, setAmountEntered] = useState('');
    const [dateEntered, setDateEntered] = useState('');
    // Using single state method
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    // const enteredTitleChange = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value,
    //     });

    //     setUserInput((prevState)=>{
    //         return {...prevState, enteredTitle: event.target.value};
    //     });
    // };

    const titleChangeHandler = (event) => {
        setTitleEntered(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmountEntered(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDateEntered(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: titleEntered,
            amount: amountEntered,
            date: new Date(dateEntered),
        };
        //console.log(expenseData);

        // Calling onSaveExpenseData of NewExpense here to pass value to NewExpense
        props.onSaveExpenseData(expenseData);

        setTitleEntered('');
        setAmountEntered('');
        setDateEntered('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={titleEntered} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">  
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amountEntered} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2012-01-01" max="2022-04-01" value={dateEntered} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;