import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import LikeButton from "./common/likeButton";
import Pagination from "./common/pagination";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage: 1,
    };
  };

  // HandleLike will update the state of the movie array.
  handleLike = currentMovie => {
    const movies = [...this.state.movies]; //we need to clone, so we dont change the state directly.
    const index = movies.indexOf(currentMovie); //we get the index of the currentMovie Object
    movies[index] = { ...currentMovie }; //Then we clone the currentMovie Object
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete(movieID) {
    if (window.confirm("Are you sure you wish to delete this movie?")) {
      deleteMovie(movieID);
      this.setState({ movies: getMovies() });
    }
  };

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };

  renderMovie = () => {
    return this.state.movies.map(movie => {
      return (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <LikeButton
              onClick={() => this.handleLike(movie)}
              liked={movie.liked}
            />
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.handleDelete(movie._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  msgShowedMovies = () => {
    let numberOfMovies = this.state.movies.length;
    return numberOfMovies === 0
      ? "No movies to show"
      : `Showing ${numberOfMovies} movies`;
  };

  render() {
    const { pageSize, currentPage} = this.state;
    return (
      <div>
        <p>{this.msgShowedMovies()}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{this.renderMovie()}</tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movies;
