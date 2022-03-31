import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'sXzTtSdQeXAmpkX6R2gXyOBk5e38pl8R';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
              + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch(URL).then((response) => response.json())
      .then((data) => this.setState({ reviews: data.results}) );
  }



  render() {
    return (
      <div className='latest-movie-reviews'>
        {typeof this.state.reviews ==='object' && this.state.reviews.length > 0 && <h1>Latest Movie Reviews</h1>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
     )


    }


}


export default LatestMovieReviewsContainer;