import React from "react";

export const SearchInput = ({
  handleSubmit,
  setSearchParams,
  searchParams,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchParams}
          onChange={setSearchParams}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
