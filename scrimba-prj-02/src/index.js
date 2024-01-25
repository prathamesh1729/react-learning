import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const nums = [1, 2, 3, 4, 5]
console.log(nums.map((n) => n * 2));
console.log(nums.map((n) => n * n));
const squares = nums.map(function (num) {
  return num * num
});
console.log(squares);

const names = ["alice", "bob", "charlie", "danielle"]
// Make all the names uppercase
console.log(names.map((name) => name.toUpperCase()));
// Make the first character of each name uppercase
// ["Alice", "Bob", "Charlie", "Danielle"]
console.log(names.map((name) => name[0].toUpperCase() + name.slice(1)));

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
console.log(pokemon.map((name) => `<p>${name}</p>`));
