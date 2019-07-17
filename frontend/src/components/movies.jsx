import React, { Component } from 'react';
import { getMovies , deleteMovie } from '../services/fakeMovieService';
import Counter from './counter';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {             
            movies: getMovies()
         };
    }
    handleDelete(movieID) {
        
        deleteMovie(movieID);
        this.setState({ movies: getMovies()});
    };
    
    renderMovie = () => {                
       return this.state.movies.map(movie => {
        return (<tr key={movie._id}>                
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button 
                className="btn btn-danger btn-sm"
                onClick={() => this.handleDelete(movie._id)}
                >
                Delete
                </button>
                </td>
        </tr>);
        });
    };
  
    msgShowedMovies = () => {
        let numberOfMovies = this.state.movies.length;
        return numberOfMovies === 0 ? 'No movies to show' :  `Showing ${numberOfMovies} movies`;
    }

    render() { 
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
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
             {this.renderMovie()}
            </tbody>
            </table>
            </div>
         );
    }
}
 
export default Movies;