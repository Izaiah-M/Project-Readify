import React, { useState } from "react";
import { SearchInput } from "./SearchInput";

import BookRequests from "../../utils/Config";
import { BookCard } from "./BookCard/BookCard";

export const Books = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    bookData(searchParams);
    setSearchParams("");
  };

  return (
    <div>
      Book
      <SearchInput
        searchParams={searchParams}
        setSearchParams={searchParamsSet}
        handleSubmit={handleSubmit}
      />
      <BookCard data={data} />
    </div>
  );
};
