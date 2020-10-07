import React, { useState, useEffect } from "react";
import "./styles/css/style.css";

const CasesByUF = () => {
  const [uf, setUf] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      const json = await response.json();
      setUf(json.data);
    };
    fetchData();
  }, []);
  if (uf === null) return null;
  return (
    <section id="casesByStates">
      <h1>Casos no Brasil por estados</h1>
      <div id="tableCases">
        <div
          id="data"
          className="d-flex justify-content-between mb-2 mt-4 pb-2"
        >
          <p>Estado</p>
          <p>Confirmados</p>
          <p>Óbitos</p>
        </div>

        <div className="mb-2">
          {uf.map((uf) => (
            <div
              className="d-flex justify-content-between align-items-center infos"
              key={uf.uid}
            >
              <p className="py-1">{uf.uf}</p>
              <p>{uf.cases}</p>
              <p>{uf.deaths}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesByUF;
