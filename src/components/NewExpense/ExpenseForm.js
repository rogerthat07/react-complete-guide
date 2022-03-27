import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
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

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">  
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2012-01-01" max="2022-04-01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;