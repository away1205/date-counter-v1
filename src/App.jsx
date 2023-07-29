import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const now = new Date().setHours(count * 24);
  let date = new Date(now).toLocaleString('in-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  function addStep() {
    setStep((curStep) => curStep + 1);
  }
  function removeStep() {
    setStep((curStep) => curStep - 1);
  }

  function addCount() {
    setCount((curCount) => curCount + step);
  }
  function removeCount() {
    setCount((curCount) => curCount - step);
  }

  const notToday =
    count > 0
      ? `${count} days from today is ${date}`
      : `${count * -1} days ago was ${date}`;

  return (
    <>
      <main className='main'>
        <div className='container'>
          <button className='btn' onClick={removeStep}>
            -
          </button>
          <p>Step: {step}</p>
          <button className='btn' onClick={addStep}>
            +
          </button>
        </div>

        <div className='container'>
          <button className='btn' onClick={removeCount}>
            -
          </button>
          <p>Count: {count}</p>
          <button className='btn' onClick={addCount}>
            +
          </button>
        </div>

        <p>{count === 0 ? `Today is ${date}` : notToday}</p>
      </main>
    </>
  );
}

export default App;
