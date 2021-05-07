import React, { useEffect } from "react";
import useFetch from "src/hooks/useFetch";
import { GET_UF_TOTAL } from "src/services/api";
import formatNumbers from "../../../utils/format_numbers";
import "./styles/css/style.css";

const CasesByUF = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { url } = GET_UF_TOTAL();
    request(url);
  }, [request]);

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
          {data?.data
            ?.sort((a, b) => (a.cases < b.cases ? 1 : -1))
            .map(uf => (
              <div
                className="d-flex justify-content-between align-items-center infos"
                key={uf.uid}
              >
                <p className="py-1">{uf.uf}</p>
                <p>{formatNumbers(uf.cases)}</p>
                <p>{formatNumbers(uf.deaths)}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CasesByUF;
