import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

function Search() {
  return (
    <div className="search_wrapper">
      <div className="search_container">
        <form>
          <div className="slug">pesquisar</div>
          <input type="text"></input>
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  );
}

export default Search;
