import React from "react";
import { companyInfo } from "../data/dummyData";

const Header = () => (
  <div className="header">
    <div className="company-info">
    <h4>{companyInfo.name}</h4>
    <div className="about-company">
      {" "} 
      <ul className="location-list">
        {companyInfo.location?.map((value, index) => (
          <li key={index}>{value}</li>
        ))}{" "}
      </ul>
     <p> | Created on: {companyInfo.createdDate}{" "} | {" "}
      <span className="badge">{companyInfo.type}</span></p>
    </div>
    </div>
    <div>
        <button className="button">+ Raise Query</button>
    </div>
  </div>
);

export default Header;
