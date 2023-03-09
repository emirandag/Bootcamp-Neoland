import React from "react";
import { useOutletContext } from "react-router-dom";

import Cards from "../components/Cards";

const Manga = () => {
  const [, requestManga] = useOutletContext();
console.log(requestManga);
  return (
    <div className="gallery">
      
    </div>
  )
};

export default Manga;
