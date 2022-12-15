import React from "react";
import "./Industries.css";
import IMG1 from "../../../assert/Images/Industry/industries1.svg";
import IMG2 from "../../../assert/Images/Industry/industries2.svg";
import IMG3 from "../../../assert/Images/Industry/industries3.svg";
import IMG4 from "../../../assert/Images/Industry/industries4.svg";
import IMG5 from "../../../assert/Images/Industry/industries5.svg";
import IMG6 from "../../../assert/Images/Industry/industries6.svg";
import IMG7 from "../../../assert/Images/Industry/industries7.svg";
import IMG8 from "../../../assert/Images/Industry/industries8.svg";
import IMG9 from "../../../assert/Images/Industry/industries9.svg";

import ItemsCard from "../../../components/ItemsCard/ItemsCard";

const industries = [
  { id: 1, image: IMG1, title: "MEDIA & ENTERTAINMENT" },
  { id: 2, image: IMG2, title: "HEALTH CARE & WELLNESS" },
  { id: 3, image: IMG3, title: "HOSPITALITY & REAL ESTATE" },
  { id: 4, image: IMG4, title: "RETAIL & E COMMERCE" },
  { id: 5, image: IMG5, title: "EDUCATION &LEARNING" },
  { id: 6, image: IMG6, title: "TRAVEL & TRANSPORT" },
  { id: 7, image: IMG7, title: "MOBILE & TELECOM" },
  { id: 8, image: IMG8, title: "IT & ITES" },
  { id: 9, image: IMG9, title: "AGRITECH" },
];

const Industries = () => {
  return (
    <section className="industries__container">
      <div className="industries">
        <div className="industries__title">
          <h1>
            WE ARE WORKING <br /> WITH THESE INDUSTRIES
          </h1>
        </div>
        <div className="industries__items">
          {industries.map((industrie) => (
            <ItemsCard items={industrie} key={industrie.id}></ItemsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
