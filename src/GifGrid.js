import React from "react";
import { useGifFetch } from "./hooks/useGifFetch";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category }) => {
  const { data: imagenes, loading } = useGifFetch(category);

  return (
    <>
      <h2>{category}</h2>
      {loading && (
        <p className="animate__animated animate__slideInLeft">Cargando...</p>
      )}

      <div className="card-grid animate__animated animate__bounceInDown">
        {imagenes.map((imagen) => {
          return <GifGridItem key={imagen.id} {...imagen} />;
        })}
      </div>
    </>
  );
};
