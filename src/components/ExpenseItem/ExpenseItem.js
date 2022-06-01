import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const ExpenseItem = (props) => {

  const Log = () => alert('clicked')

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <Button onClick={Log} variant="contained" className="ei-blue" endIcon={<ShoppingBagIcon />}>BUY</Button>
    </Card>
  );
}

export default ExpenseItem;
