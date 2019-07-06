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

/**Getting this kind of warning.. What to do
 * warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory

https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Formatting-and-Whitespace
*/
