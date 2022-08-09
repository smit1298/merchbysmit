import React from "react";
import { Link } from "react-router-dom";

function feedbackDetail(props) {
  return (
    <>
      <div className="feedback-cont">
        <img src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a className="feed-link" href={props.link}>{props.contact}</a>
      </div>
    </>
  );
}

export default feedbackDetail;