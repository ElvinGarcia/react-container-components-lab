// Code MovieReviews Here
import React from "react";

const MovieReviews = ({display_title , summary_short , src, link_url, index }) => (

  <ul>
    <li className="review" key={index}>
      <a href={link_url}> <img src={src} alt={display_title} /> </a>
      <h3>{display_title}</h3>
      <p>{summary_short}</p>
    </li>
  </ul>
)


export default MovieReviews;