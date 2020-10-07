import React, { useEffect, useState } from "react";
import "./styles/css/styles.css";

const FetchData = () => {
  const [recovered, setRecovered] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.covid19api.com/world/total");
      const json = await response.json();
      setRecovered(json.TotalRecovered);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div
        id="recovered_box"
        className="d-flex align-items-center justify-content-center"
        style={{ marginRight: "30px" }}
      >
        <div>
          <h6 style={{ fontWeight: "400" }}>Casos recuperados</h6>

          <h5 style={{ fontWeight: "400" }}>{recovered}</h5>
        </div>
      </div>
    </section>
  );
};

export default FetchData;
