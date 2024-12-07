import React, { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(
    () => {
      apiClient
        .get(endpoint, customConfig)
        .then((res) => setData(res.data))
        .catch((err) => setError(err.message));
    },
    deps ? deps : []
  );
  return { data, error };
};

export default useData;
