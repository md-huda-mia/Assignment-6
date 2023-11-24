import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 8)));
  }, []);

  return (
    <div className="mt">
      <div className="section_title">
        <h1>Countries Component</h1>
      </div>
      <div className="countries_container">
        {countries?.map((country, i) => (
          <Country key={i} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
