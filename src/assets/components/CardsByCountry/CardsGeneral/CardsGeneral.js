import React from "react";
import CasesBrazil from "./CasesBrazil/CasesBrazil";
import CasesChina from "./CasesChina/CasesChina";
import CasesItaly from "./CasesItaly/CasesItaly";
import CasesUS from "./CasesUS/CasesUS";
import CasesByUF from "../../CasesByUF/CasesByUF";

const CardsGeneral = () => {
  return (
    <section id="casesByCountry" className="align-items-start">
      <div className="container d-flex justify-content-start flex-wrap">
        <div
          className="d-flex justify-content-start flex-wrap"
          style={{ margin: "30px 0px", flex: "1" }}
        >
          <CasesBrazil />
          <CasesChina />
          <CasesItaly />
          <CasesUS />
        </div>
        <div
          className="d-flex justify-content-start flex-wrap"
          style={{ margin: "30px 0px" }}
        >
          <CasesByUF />
        </div>
      </div>
    </section>
  );
};

export default CardsGeneral;
