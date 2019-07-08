import React, { Component } from "react";
import BookSearch from "./bookSearch/bookSearch";
//import DisplayPrintType from "./printType/displayPrintType";
//import DisplayBookType from "./bookType/displayBookType";
//import GetPrintType from "./printType/getPrintType";
//import DisplaySelection from "./displaySelection/displaySelection";

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

  setPrintSelected = () => {
    console.log("a print has been selected", this);
  };

  setBookSelected = () => {
    console.log("a BOOK has been selected", this);
  };

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
    /*
    handleSelectionChange = e => {
      e.preventDefault();
      console.log("this has been selected!!!");
      // const target = event.target;
      // const name = target.name;

      //     if (target.id === "print" || "book") {
      //       this.setState({
      //         [name]: target.value
      //       });
      //       console.log("");
      //       };
      //const value = target.id === 'print' ? target.value :
      //https://reactjs.org/docs/forms.html
    };
*/

    return (
      <div className="App">
        <BookSearch
          searchResults={searchResults}
          selectOptions={selectOptions}
          printChangeHandler={this.setPrintSelected}
          bookChangeHandler={this.setBookSelected}
          //changeHandler={e => this.handleSelectionChange(e)}
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
