import { useState, useEffect } from "react";

export const useFetch = (URL) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const conseguirUsuarios = async () => {
    if (!URL) return;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setState({
        data: data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    conseguirUsuarios();
  }, [URL]);

  return state;
};
