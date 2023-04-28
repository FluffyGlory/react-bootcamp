import { useState } from 'react';

import ExpenseList from './components/ExpenseList';
import NewExpense from './components/newExpense/NewExpense';
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 568.45,
    date: new Date(2023, 2, 4),
  },
  { id: 'e2', title: 'Lunch', amount: 58.45, date: new Date(2023, 1, 28) },
  {
    id: 'e3',
    title: 'Electricity',
    amount: 450.76,
    date: new Date(2023, 3, 1),
  },
];
export default function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
