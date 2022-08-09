import React from "react";
import { Icon } from "@iconify/react";
import "./features.css";

function Details(props) {
  const features = props.features;
  const listFeatures = features
    ? features.map((feature) => {
        return (
          <li key={feature}>
            <img src="./Assets/icons/Check.png" alt={props.name} /> &nbsp;
            {feature}
          </li>
        );
      })
    : null;

  return (
    <>
      <div className={props.platform}>
        <div className="feature-description">
          <img src={props.Image} alt={props.name} />
          <h3 className="w-100">{props.title}</h3>
          <p className="mb-1">{props.description}</p>
          <ul className="mt-1">{listFeatures}</ul>
        </div>

        <div className="feature-img">
          <img className="imgCont" src={props.Gif} alt={props.name} />
        </div>
      </div>
    </>
  );
}

export default Details;
