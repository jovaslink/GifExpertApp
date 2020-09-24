import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Rick and Morty"]);

  /* const handleAdd = () => {
    setCategories([...categories, "Superman"]);
  };
 */

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
