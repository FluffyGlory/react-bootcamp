import ResultTable from './components/ResultTable';
import MainHeader from './components/MainHeader';
import DataForm from './components/DataForm';
import { useState } from 'react';
function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <MainHeader />

      <DataForm onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: 'center' }}>Investment not calculated.</p>
      )}
      {userInput && (
        <ResultTable data={yearlyData} initial={userInput['current-savings']} />
      )}
    </div>
  );
}

export default App;
