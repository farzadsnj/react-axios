import React from "react";
import useAxios from "../hooks/useAxios";
import axios from "../apis/dadJokes";

const Jokes = () => {
  const [joke, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Accept": "text/html",
      },
    },
  });
  return (
    <article>
      <h2>Random Dad Jokes</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p classname="errMsg">{error}</p>}
      {!loading && !error && joke && <p>{joke?.joke}</p>}
      {!loading && !error && !joke && (
        <p classname="errMsg">No dad jokes to display</p>
      )}
    </article>
  );
};

export default Jokes;
