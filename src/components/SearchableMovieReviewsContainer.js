import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'sXzTtSdQeXAmpkX6R2gXyOBk5e38pl8R';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      reviews: [],
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL+this.state.searchTerm)
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: data.results }))
      .catch(console.error('an error occured'))
  }

  handleChange = (event)=> this.setState({ searchTerm: event.target.value });





  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
  <input type="text" placeholder='search' onChange={this.handleChange} focus= "true" />
          <button value="search" type="submit">search</button>
        </form>

        {typeof this.state.reviews ==='object' && this.state.reviews.length > 0 && <h1>Movie Results</h1> }
        <MovieReviews reviews={this.state.reviews}/>
      </div>


    )
  }

}


export default SearchableMovieReviewsContainer;