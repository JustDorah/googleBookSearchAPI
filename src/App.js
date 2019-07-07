import React, { Component } from "react";
import BookSearch from "./bookSearch/bookSearch";
//import DisplayPrintType from "./printType/displayPrintType";
//import DisplayBookType from "./bookType/displayBookType";

import "./App.css";
//import Book from "./book/book";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrintType: "All",
      isBookType: "No-Filter"
    };
  }

  render() {
    const searchResults = [
      {
        imageUrl: "http://lorempixel.com/400/200/",
        title: "Henry I",
        author: "C. Warren Hollister",
        price: "$50.00",
        description: "lorem ipsum valahalla",
        printType: "Book",
        isEbook: true,
        viewability: "partial"
      },
      {
        imageUrl: "http://lorempixel.com/400/200/",
        title: "Henry VIII",
        author: "C. Warren Hollister",
        price: "$50.00",
        description: "lorem ipsum valahalla",
        printType: "Book",
        isEbook: false,
        viewability: "partial"
      }
    ];

    const selectOptions = {
      printSelections: ["all", "books", "magazines"],
      bookSelections: [
        "partial",
        "full",
        "free-ebooks",
        "paid-ebooks",
        "ebooks"
      ]
    };
    return (
      <div className="App">
        <BookSearch
          searchResults={searchResults}
          selectOptions={selectOptions}
        />
      </div>
    );
  }
}

/**Getting this kind of warning.. What to do
 * warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory

https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Formatting-and-Whitespace
*/
