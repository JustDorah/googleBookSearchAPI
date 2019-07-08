import React, { Component } from "react";
import BookSearch from "./bookSearch/bookSearch";

import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrintType: "All",
      isBookType: "No-Filter",
      searchEntry: "",
      fetchResults: [],
      maxResults: 5
    };
  }

  // setPrintSelected = () => {
  //   console.log("a print has been selected", this);
  // };

  setPrintSelected(sel) {
    //this.setState({
    // isPrintType: sel
    //});
    console.log("Print Selected:", sel);
  }

  setBookSelected(sel) {
    console.log(" BOOK selected:", sel);
  }

  searchInput(inp) {
    console.log("Search has been activated. Searsch entry is: ", inp);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit handled!");

    const baseUrl =
      "https://www.googleapis.com/books/v1/volumes?q=search+terms";

    const queryString = baseUrl;

    // fetch()
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
        "no-filter",
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
          printChangeHandler={sel => this.setPrintSelected(sel)}
          bookChangeHandler={sel => this.setBookSelected(sel)}
          handleSubmit={e => this.handleSubmit(e)}
          //bookChangeHandler={this.setBookSelected}
          handleSearchInput={inp => this.searchInput(inp)}
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
