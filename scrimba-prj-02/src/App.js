import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import experiences from './data/experiences';
import CardX from './components/CardX';
import MultiJoke from './components/MultiJoke';
import Form from './components/Form';


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

  // Following three JS objects are created using map function
  // on the experiences array of objects.
  // Each uses a different method of passing the props to the Card component.

  // Explicitly mapping each data item to a prop.
  const exps = experiences.map(exp => {
    return (
      <Card
        key={exp.id}
        coverImg={exp.coverImg}
        rating={exp.stats.rating}
        reviewCount={exp.stats.reviewCount}
        location={exp.location}
        title={exp.title}
        price={exp.price}
        openSpots={exp.openSpots}
        stats={exp.stats}
      />
    )
  });

  // Passing the entire data item JS object as a prop.
  const expsv2 = experiences.map(exp => {
    return (
      <CardX
        key={exp.id}
        item={exp}
      />
    )
  });

  // Using the spread operator to pass all the data items as props.
  const expsv3 = experiences.map(exp => {
    return (
      <Card
        key={exp.id}
        {...exp}
      />
    )
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card 
          img="kz.png"
          rating="5.0"
          reviewCount={6}
          location="USA"
          title="Life Lessors with KZ"
          price={136}
          /> */}

      <section className="cards-list">
        {exps}
        {expsv2}
        {expsv3}
      </section>

      {/* <MultiJoke /> */}
      <Form />
    </div>
  )
}

export default App;
