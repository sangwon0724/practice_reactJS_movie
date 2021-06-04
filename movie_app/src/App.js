import logo from './logo.svg';
import './App.css';
//import PropTypes  from "prop-types";
import React from 'react';
import axios from "axios";
import Movie from "./Movie";



class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async () => {
    const {data: {data: { movies }}}
      = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return(
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              /> ))}
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
