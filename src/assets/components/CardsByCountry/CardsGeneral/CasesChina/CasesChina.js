import React, { useEffect } from "react";
import useFetch from "src/hooks/useFetch";
import { GET_CHINA_TOTAL } from "src/services/api";
import formatNumbers from "src/utils/format_numbers";
import "./css/styles.css";

const FetchCasesChina = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { url } = GET_CHINA_TOTAL();
    request(url);
  }, [request]);

  return (
    <div id="card_china">
      <h1>Situação na China</h1>
      <p className="mt-4">
        Casos:
        <strong> {formatNumbers(data?.data?.cases)} </strong>
      </p>
      <p className="mt-2">
        Casos confirmados:
        <span style={{ color: "#FFAA00" }}>
          {" "}
          {formatNumbers(data?.data?.confirmed)}
        </span>
      </p>
      <p className="mt-2">
        Casos recuperados:
        <span style={{ color: "#00FF66" }}>
          {" "}
          {formatNumbers(data?.data?.recovered)}
        </span>
      </p>
      <p className="mt-2">
        Óbitos confirmados:
        <span style={{ color: "#FF0000" }}>
          {" "}
          {formatNumbers(data?.data?.deaths)}
        </span>
      </p>
    </div>
  );
};

export default FetchCasesChina;
