import React from "react";
import Form from "next/form";

const Search = () => {
  return (
    <Form action="/products-db">
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default Search;
