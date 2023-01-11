import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        const weatherData = await fetch(url);
        const getData = await weatherData.json();
        setIsPending(false);
        setData(getData);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    };
    url && fetchData();
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
