import React from "react";
import "./Benefits.css";

function Detail(props) {
  return (
    <>
      <div className="benefit-cont">
        <img className="mb-2" src={props.Img} alt={props.name} />
        <h3>{props.titles}</h3>
        <p>{props.descriptions}</p>
      </div>
    </>
  );
}

export default Detail;
