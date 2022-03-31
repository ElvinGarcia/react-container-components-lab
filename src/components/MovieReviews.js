// Code MovieReviews Here
import React from "react";

const Review = ({display_title, link, summary_short, headline, multimedia }) => (
  <div className='review-list' key={headline}>
    <header className='review' key={display_title}>
      <h1>{display_title}</h1>
      <h2>{headline}</h2>
      <a href={link.url}><img src={multimedia ? multimedia.src : link.url  } alt={display_title} /></a>
    </header>
      <blockquote>{summary_short}</blockquote>
  </div>
);



const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;