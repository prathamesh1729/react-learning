import './App.css';
import Boxes from './components/Boxes';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Exercise from './components/Exercise';
import Explore from './components/Explore';
import Header from './components/Header';
import Meme from './components/Meme';


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

  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <Explore /> */}
      {/* <Exercise /> */}
      {/* <Counter /> */}
      {/* <Contact /> */}
      <Boxes darkMode={false} />
    </div>
  );
}

export default App;
