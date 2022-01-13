import React from "react"
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import "./Search.css"

const Search = () => {
  return (
    <div className="search">
      <div className="search_icon">
        <SearchIcon />
      </div>
      <input type="text" name="search" id="search" placeholder="Type disease here" />
    </div>
  )
}

export default Search