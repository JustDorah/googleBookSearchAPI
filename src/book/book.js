import React from "react";

export default function Book(props) {
  return (
    <div className="book">
      <div className="book__row">
        <div className="book__title">
          <h3>{props.title}</h3>
          <div>
            <img src={props.imageUrl} alt="random images" />
            <p>{props.author}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
      <div className="bookmark__description">{props.description}</div>
      <hr />
    </div>
  );
}

/**<div className="book">
      <div className="book__row">
        <div className="book__title">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </div>
        <Rating value={props.rating} />
      </div>
      <div className="bookmark__description">{props.description}</div> */
