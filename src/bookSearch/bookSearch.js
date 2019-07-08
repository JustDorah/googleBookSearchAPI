import React, { Component } from "react";

import BookSearchList from "../booksearchList/booksearchList";
//import DisplayPrintType from "../printType/displayPrintType";
import GetPrintType from "../printType/getPrintType";
//import DisplayBookType from "../bookType/displayBookType";
import GetBookType from "../bookType/getBookType";

export default class BookSearch extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("submit handled!");
  }
  render() {
    console.log(this.props.searchResults);
    return (
      <div className="BookSearch">
        <header className="header">
          <h1> Google Book Search</h1>
        </header>

        <form className="googleBookSearch__form" onSubmit={this.handleSubmit}>
          <label className="searchL" htmlFor="search">
            Search:
          </label>
          <input type="text" name="search" id="search" placeholder="henry" />

          <input type="submit" value="Submit" />
        </form>

        <label htmlFor="printType">Print Type:</label>
        <GetPrintType
          selectOptions={this.props.selectOptions}
          printChangeHandler={this.props.printChangeHandler}
        />

        {/* **********************sdf */}
        <label htmlFor="bookType">Book Type:</label>
        <GetBookType
          selectOptions={this.props.selectOptions}
          bookChangeHandler={this.props.bookChangeHandler}
        />

        {/* **************** BOOK SEARCH RESULTS ***************/}
        <BookSearchList searchResults={this.props.searchResults} />
      </div>
    );
  }
}
