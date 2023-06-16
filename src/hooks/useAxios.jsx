import React, { useState, useEffect } from "react";

const useAxios = (configOBJ) => {
  const { axiosInstance, method, url, requestConfig = {} } = configOBJ;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        console.log(res.data);
        setResponse(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    //cleanup function for useEffect
    return () => controller.abort();
  }, []);

  return [response, error, loading];
};

export default useAxios;
