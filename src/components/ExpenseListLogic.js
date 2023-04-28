import ExpenseItem from './ExpenseItem';
import './styles/ExpenseListLogic.css';

export default function ExpenseListLogic({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else
    return (
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
}
