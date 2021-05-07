import React, { useEffect } from "react";
import useFetch from "src/hooks/useFetch";
import { GET_TOTAL } from "src/services/api";
import formatNumbers from "../../../../utils/format_numbers";
import "./styles/css/styles.css";

const FetchData = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { url } = GET_TOTAL();
    request(url);
  }, [request]);

  return (
    <section>
      <div
        id="deaths_box"
        className="d-flex align-items-center justify-content-center"
        style={{ marginRight: "30px" }}
      >
        <div>
          <h6 style={{ fontWeight: "400" }}>Óbitos confirmados</h6>

          <h5 style={{ fontWeight: "400" }}>
            {formatNumbers(data?.TotalDeaths)}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default FetchData;
