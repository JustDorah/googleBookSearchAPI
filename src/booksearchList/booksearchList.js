import React, { Component } from "react";
//import BookSearch from "../bookSearch/bookSearch";
import Book from "../book/book";

export default class BookSearchList extends Component {
  render() {
    const searchresults = this.props.searchResults.map((results, i) => (
      <Book {...results} key={i} />
    ));
    console.log(searchresults, "bookSearchList results");
    return <div className="BookSearchList">{searchresults}</div>;
  }
}
