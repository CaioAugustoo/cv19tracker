import React, { useEffect, useState } from "react";
import "./css/styles.css";

const FetchCasesBrazil = () => {
  const [cases, setCases] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [deaths, setDeaths] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
      );
      const json = await response.json();
      setCases(json.data.cases);
      setConfirmed(json.data.confirmed);
      setRecovered(json.data.recovered);
      setDeaths(json.data.deaths);
    };
    fetchData();
  }, []);
  return (
    <div id="card_brazil" style={{ marginRight: "30px" }}>
      <h1>Situação no Brasil</h1>
      <p className="mt-4">
        Casos:
        <strong> {cases} </strong>
      </p>
      <p className="mt-2">
        Casos confirmados:
        <span style={{ color: "#FFAA00" }}> {confirmed}</span>
      </p>
      <p className="mt-2">
        Casos recuperados:
        <span style={{ color: "#00FF66" }}> {recovered}</span>
      </p>
      <p className="mt-2">
        Óbitos confirmados:
        <span style={{ color: "#FF0000" }}> {deaths}</span>
      </p>
    </div>
  );
};

export default FetchCasesBrazil;
