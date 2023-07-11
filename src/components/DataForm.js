import { useState } from 'react';
import classes from './DataForm.module.css';
export default function DataForm({ onCalculate }) {
  const initialUserInput = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0,
  };
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  };
  const resetHandler = (event) => {
    setUserInput(initialUserInput);
  };
  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value };
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler('current-savings', event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler('yearly-contribution', event.target.value)
            }
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler('expected-return', event.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler('duration', event.target.value)}
            type="number"
            id="duration"
            value={userInput.duration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
