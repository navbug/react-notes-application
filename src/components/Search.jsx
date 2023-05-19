import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { notesActions } from "../store";
import "./Search.css";

const Search = () => {
  // const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  return (
    <div className="search_container">
      <div className="search">
        <input type="text" placeholder="Search..." onChange={() => {
          dispatch(notesActions.filterNotes({
            keyword: document.querySelector(".search input").value,
          }))
        }}/>
        <span>
          <BsSearch />
        </span>
      </div>
    </div>
  );
};

export default Search;
