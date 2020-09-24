import { useState, useEffect } from "react";
import { GetGif } from "../helpers/GetGif";

export const useGifFetch = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      GetGif(category).then((imagenes) => {
        setState({
          data: imagenes,
          loading: false,
        });
      });
    }, 1500);
  }, [category]);

  return state;
};
