import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  const request = useCallback(async url => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }, []);

  return { request, data };
};

export default useFetch;
