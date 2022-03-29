import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'sXzTtSdQeXAmpkX6R2gXyOBk5e38pl8R';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      result: [],
    };


  }

  submitedForm(event) {
    event.preventDefault();
    submitedInput = event.target.query.value

  //  left here. 'submitedInput' is the value of the form when submmited
  }

  onChange(event) {
    console.log(event.target.value)
   const input = event.target.value;
    this.setState({data:input})
  }

  render() {
    return (
      <div>
        <form name="form" onSubmit={(event)=>this.submitedForm(event)}>
          <input type="text" name="query" placeholder='search' onChange={(event) => this.onChange(event)} />
          <button name="search" type="submit">search</button>
        </form>
      </div>
    )
  }

}


export default SearchableMovieReviewsContainer;