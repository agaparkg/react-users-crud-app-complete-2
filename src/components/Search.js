import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";

const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    // console.log(query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Col className="text-start">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
            className="form-control"
            value={query}
          />
        </div>
        <div className="col-auto">
          <Button onClick={handleSubmit}>Search</Button>
        </div>
      </form>
    </Col>
  );
};

export default Search;
