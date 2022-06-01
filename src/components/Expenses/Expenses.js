import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        currency={props.items[0].currency}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        currency={props.items[1].currency}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        currency={props.items[2].currency}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        currency={props.items[3].currency}
      />
    </Card>
  );
}

export default Expenses;
