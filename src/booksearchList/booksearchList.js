import React, { Component } from "react";
//import BookSearch from "../bookSearch/bookSearch";
import Book from "../book/book";

export default class BookSearchList extends Component {
  render() {
    const searchResults = this.props.searchResults.map((results, i) => (
      <Book {...results} key={i} />
    ));
    console.log(searchResults, "bookSearchList results");
    return <div className="BookSearchList">{searchResults}</div>;
  }
}
