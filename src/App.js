import React, { Component } from "react";
import BookSearch from "./bookSearch/bookSearch";

import "./App.css";

const searchResults = [
  {
    imageUrl: "http://lorempixel.com/400/200/",
    title: "Henry I",
    author: "C. Warren Hollister",
    price: "$50.00",
    description: "lorem ipsum valahalla"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/",
    title: "Henry VIII",
    author: "C. Warren Hollister",
    price: "$50.00",
    description: "lorem ipsum valahalla"
  }
];
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BookSearch searchResults={searchResults} />
        {/* adfasdf */}
        {/* adfa */}
      </div>
    );
  }
}
