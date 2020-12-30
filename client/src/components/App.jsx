import React from "react";
import axios from "axios";
import Header from "./Header.jsx";
import MovieList from "./MovieList.jsx";
import MovieForm from "./MovieForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.getMovies = this.getMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    // bindings go here, attatch the word this to state (be mindful of lifting state up)
  }

  componentDidMount() {
    this.getMovies();
  }



  getMovies() {
    axios
      .get("/movies")
      .then((res) => {
        const { data } = res;
        this.setState({ movies: data });
      })
      .catch((err) => console.log(err));}

  addMovie(movie) {
    console.log(movie)
    axios
      .post("/movies", movie)
      .then(() => {
        this.getMovies();
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <MovieForm submitHandler={this.addMovie} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default App;
