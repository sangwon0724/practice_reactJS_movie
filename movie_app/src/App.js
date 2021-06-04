import logo from './logo.svg';
import './App.css';
import PropTypes  from "prop-types";
import React from 'react';



class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    this.state.count+=1;
  };
  minus = () => {
    console.log("minus");
    this.state.count-=1;
  };
  render() {
    return (
      <div>
        <h1>The number is: <span id="num"></span></h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}*/

/*
  컴포넌트 기본
  function Food({ name, picture }) {
    return (
      <div>
        <h2>I like {name}</h2>
        <img src={picture} alt={name} />
      </div>
    );
  }

  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
  };

  <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
*/


/*
  App return 기본

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
*/

export default App;
