import React from "react";

export const GifGridItem = ({ id, title, image }) => {
  console.log(id, image, title);

  return (
    <div className="card animate__animated animate__zoomInDown">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
