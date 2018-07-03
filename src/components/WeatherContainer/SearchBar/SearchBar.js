import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  render() {
    return (
      <div className="search-container">
        <input type="text" />
        <button>
          <i class="icon ion-ios-search" />
        </button>
        <div className="search-indicator-line" />
        <div className="clear-fix" />
      </div>
    );
  }
}

export default SearchBar;
