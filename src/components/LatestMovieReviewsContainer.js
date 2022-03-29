import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'sXzTtSdQeXAmpkX6R2gXyOBk5e38pl8R';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch(URL).then((response) => response.json())
      .then((data) => this.setState({ reviews: data.results }));
  }


  render() {
    return (
      this.state.reviews.map((review, index) => < MovieReviews display_title={review.display_title} summary_short={review.summary_short} src={review.multimedia.src} link_url={review.link.url} index={index} />)
    )


    }


}


export default LatestMovieReviewsContainer;