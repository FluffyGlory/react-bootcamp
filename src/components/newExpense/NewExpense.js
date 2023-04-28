import '../styles/NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

export default function NewExpense({ onAddExpense }) {
  const [isCreating, setIsCreating] = useState(false);

  function startCreatingHandler() {
    setIsCreating(true);
  }

  function stopCreatingHandler() {
    setIsCreating(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isCreating && (
        <button onClick={startCreatingHandler}>Add New Expense</button>
      )}
      {isCreating && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopCreatingHandler}
        />
      )}
    </div>
  );
}
