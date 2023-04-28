import { useState } from 'react';
import ExpenseListLogic from './ExpenseListLogic';
import Card from './UI/Card';
import './styles/ExpenseList.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './expensesFilter/ExpensesFilter';

export default function ExpenseList({ expenses, expensesContent }) {
  const [filteredYear, setFilteredYear] = useState('2023');

  function grabFilterYear(year) {
    setFilteredYear(year);
  }
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={grabFilterYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseListLogic filteredExpenses={filteredExpenses} />
      </Card>
    </>
  );
}
