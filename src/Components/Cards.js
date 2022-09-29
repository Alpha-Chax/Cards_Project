import React from "react";
import "../Card.css";

function Card(mdata) {
  const { imgurl, title, body } = mdata;
  return (
        <div className="card-container">
          <div className="image-container">
            <img className="Image" src={imgurl} alt="" />
          </div>
          <div className="cardtitle">
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="cardbody">
            <p className="card-body">{body}</p>
          </div>
        </div>
  );
}

export default Card;
