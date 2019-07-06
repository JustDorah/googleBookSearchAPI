import React, { Component } from "react";

export default class BookSearch extends Component {
  render() {
    return (
      <div className="BookSearch">
        <h1> Google Book Search</h1>
        <form className="googleBookSearch__form">
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search" placeholder="henry" />
          <label htmlFor="printType">Print Type:</label>
          <input
            type="text"
            name="printType"
            id="printType"
            placeholder="All"
          />
          <label htmlFor="bookType">Book Type:</label>
          <input
            type="text"
            name="bookType"
            id="bookType"
            placeholder="No Filter"
          />
        </form>
      </div>
    );
  }
}
