import React, { useEffect, useState } from "react";
import "./styles/css/styles.css";

const FetchData = () => {
  const [deaths, setDeaths] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.covid19api.com/world/total");
      const json = await response.json();
      setDeaths(json.TotalDeaths);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div
        id="deaths_box"
        className="d-flex align-items-center justify-content-center"
        style={{ marginRight: "30px" }}
      >
        <div>
          <h6 style={{ fontWeight: "400" }}>Óbitos confirmados</h6>

          <h5 style={{ fontWeight: "400" }}>{deaths}</h5>
        </div>
      </div>
    </section>
  );
};

export default FetchData;
