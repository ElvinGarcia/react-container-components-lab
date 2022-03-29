// Code MovieReviews Here
import React from "react";

const MovieReviews = ({display_title , summary_short , src }) => (

  <ul>
    <li className="review"><img src={src} /><h3>{display_title}</h3> <p>{summary_short}</p></li>
  </ul>
)


export default MovieReviews;