import "./SignUp.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('/constituencies', {term: term})
      .then(res => setResults(res.data.results))
  }, [])
  return (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search constituencies:</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search constituencies"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
  )
};