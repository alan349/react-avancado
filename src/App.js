import React, { useState, useCallback } from 'react';
import './App.css';

// import Form from './components/Form';
// import SignupForm from './components/SignupForm';
// import SignupFormExercicio from './components/SignupFormExercicio';
// import Counter from './components/Reducer';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClickCount1 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1])

  const handleClickCount2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  const eventForOd = () => {
    if (count1 % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }

  return (
    <div className="App">
      {/* <SignupFormExercicio /> */}
      {/* <Counter /> */}
      <Counter1 eventForOd={eventForOd()} setValue={handleClickCount1} value={count1} />
      <Counter2 setValue={handleClickCount2} value={count2} />
    </div>
  );
}

export default App;
