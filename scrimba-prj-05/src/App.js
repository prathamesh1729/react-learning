import React from 'react'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid'
import './App.css';
import Die from './components/Die';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const [dice, setDice] = React.useState(allNewDiceV2());
  const [tenzies, setTenzies] = React.useState(false);

  // React.useEffect(() => {
  //   console.log("Dice state changed!");
  //   for (let die of dice) {
  //     if (die.value !== dice[0].value) {
  //       return;
  //     }
  //     if (!die.isHeld) {
  //       return;
  //     }
  //   }
  //   setTenzies(true);
  //   console.log("Tenzies! You won!");
  // }, [dice]);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === dice[0].value);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("Tenzies! You won!");
    }
  }, [dice]);

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    )
  })

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDiceV2() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {

    if (tenzies) {
      setTenzies(false);
      setDice(allNewDiceV2());
    }
    else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          if (die.isHeld) {
            return die;
          }
          return generateNewDie();
        });
      });
    }
  }

  function holdDice(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld
          }
        }
        return die;
      });
    });
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App;
