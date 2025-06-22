import React from "react";
import { companyInfo } from "../data/dummyData";

const Header = () => (
  <div className="header  flex-wrap">
    <div className="company-info  flex-wrap">
    <h4>{companyInfo.name}</h4>
    <div className="about-company  flex-wrap">
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
    <div className="flex" style={{alignItems: "center",gap: "10px"}}>
      <span class="material-symbols-outlined" style={{color:'#0492c2'}}>
menu
</span>
        <button className="button">+ Raise Query</button>
    </div>
  </div>
);

export default Header;
