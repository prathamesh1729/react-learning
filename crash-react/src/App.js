import logo from './logo.svg';
import './App.css';
import Books from './Books';
import StatefulBooks from './StatefulBooks';

function AppDef() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h4>Hello, Reactive World!</h4>
      <p>Here's my booklist!</p>
      <Books />
      <StatefulBooks />
    </div>
  );
}

export default App;
