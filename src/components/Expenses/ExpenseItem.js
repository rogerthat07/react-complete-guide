import Cards from '../UI/Cards';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const clickHandler = () => {
    console.log("clicked !!");
  }

  return (
    <Cards className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Cards>
  );
}

export default ExpenseItem;
