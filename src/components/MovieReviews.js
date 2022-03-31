// Code MovieReviews Here
import React from "react";

const Review = ({display_title, link, summary_short, headline, multimedia }) => (
  <ul key={headline}>
    <li key={display_title}>
      <h1>{display_title}</h1>
      <h2>{headline}</h2>
      <a href={link.url}><img src={multimedia ? multimedia.src : link.url  } alt={display_title} /></a>
      <h3>{summary_short}</h3>
    </li>
  </ul>
);



const MovieReviews = ({ reviews }) => reviews.map((Review));

MovieReviews.defaultprops = {
  reviews: [],
}

export default MovieReviews;