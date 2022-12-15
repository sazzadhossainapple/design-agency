import React from "react";
import "./Measurement.css";
import IMG1 from "../../../assert/Images/Measurement/measurement1.svg";
import IMG2 from "../../../assert/Images/Measurement/measurement2.svg";
import IMG3 from "../../../assert/Images/Measurement/measurement3.svg";
import IMG4 from "../../../assert/Images/Measurement/measurement4.svg";
import IMG5 from "../../../assert/Images/Measurement/measurement5.svg";
import IMG6 from "../../../assert/Images/Measurement/measurement6.svg";
import IMG7 from "../../../assert/Images/Measurement/measurement7.svg";
import IMG8 from "../../../assert/Images/Measurement/measurement8.svg";
import ItemsCard from "../../../components/ItemsCard/ItemsCard";

const measurements = [
  { id: 1, image: IMG1, title: "TRANSPARENCY AND RELIABILITY" },
  { id: 2, image: IMG2, title: "REAL TIME PROJECT STATUS" },
  { id: 3, image: IMG3, title: "WELL STRUCTURED COMMUNICATION" },
  { id: 4, image: IMG4, title: "AGILE METHODOLOGY" },
  { id: 5, image: IMG5, title: "ONSITE COLLABORATION" },
  { id: 6, image: IMG6, title: "INNOVATION AT WORK" },
  { id: 7, image: IMG7, title: "CLIENT'S INVOLVEMENT IN EACH MILESTONE" },
  { id: 8, image: IMG8, title: "DEDICATED TEAM" },
];

const Measurement = () => {
  return (
    <section className="measurement__container">
      <div className="measurement">
        <div className="measurement__title">
          <h1>
            MEASUREMENT <br /> TO OUR SUCCESS
          </h1>
          <p>Our process-driven approach keeps us going</p>
        </div>
        <div className="measurement__items">
          {measurements.map((measurement) => (
            <ItemsCard items={measurement} key={measurement.id}></ItemsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Measurement;
