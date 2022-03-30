import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';
const NYT_API_KEY = 'sXzTtSdQeXAmpkX6R2gXyOBk5e38pl8R';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      reviews: [],
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch(URL + '&query=' + this.state.input)
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: data.results }))
      .catch(console.error('an error occured'))

  }

  handleChange(event) {
    this.setState({data: `${event.target.value}`})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
  <input type="text" value={this.state.value} placeholder='search' onChange={(event) => this.handleChange(event)} />
          <button value="search" type="submit">search</button>
        </form>

        {/* should display the components below if this.state.reviews is not empty. I should be passing the entire state over to < MovieReviews /> component */}
         < MovieReviews reviews={this.state.reviews} />)




      </div>


    )
  }

}


export default SearchableMovieReviewsContainer;