import React, { Component } from 'react';
import SearchForm from './SearchForm'
import MoviesResults from './MoviesResults'

class App extends Component {
  render() {
    var movieResults = '';
    movieResults = this.state.movies == '' ? '' : <MoviesResults movies={this.state.movies}/>
    return (
      <div className="album py-5 bg-light">
        <h1>Movies</h1>
        <div className="container">
          <SearchForm />
        </div>
        <div className="container pull-down">
          {movieResults}
        </div>
      </div>
    )
  }
}

export default App