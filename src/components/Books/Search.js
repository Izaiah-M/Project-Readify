import React, { useState } from "react";
import { SearchInput } from "./SearchInput";

import BookRequests from "../../utils/Config";
import { Book } from "./Book";
import "./Search.css";

export const Search = ({ handleBookSubmit, newEvent, setNewEvent }) => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [searched, setSearched] = useState(false);

  const bookData = async (searchValue) => {
    try {
      const results = await BookRequests.getBookBySearch(searchValue);
      setData(results);

      console.log(results);

      return results;
    } catch (error) {
      console.log(error);
    }
  };

  const searchParamsSet = ({ target }) => {
    setSearchParams(target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearched(true);
    bookData(searchParams);
    setSearchParams("");
  };

  return (
    <div className="search">
      <SearchInput
        searchParams={searchParams}
        setSearchParams={searchParamsSet}
        handleSubmit={handleSearchSubmit}
      />
      <Book
        data={data}
        handleSubmit={handleBookSubmit}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        searched={searched}
      />
    </div>
  );
};
