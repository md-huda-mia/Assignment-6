import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, languages, population } = country;
  return (
    <div>
      <div className="county_area">
        <img src={flags.png} alt="" />
        <div className="coutry_info">
          <h2>{name.common}</h2>
          <div className="info">
            <span>Languages: {languages?.eng ? languages?.eng : "Others"}</span>
            <span>Population: {population}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
