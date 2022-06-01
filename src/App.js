import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 940.0,
      date: new Date(2022, 7, 14),
      currency: 'EUR',
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.0,
      date: new Date(2022, 2, 12),
      currency: 'EUR',
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.0,
      date: new Date(2022, 2, 28),
      currency: 'EUR',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 195.0,
      date: new Date(2022, 5, 12),
      currency: 'EUR',
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
