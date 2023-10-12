import React from "react";

const MovieItem = ({ image }) => {  
    // console.log(image);
  return <img src={image} className="rounded-lg shadow-lg hover:"/>;
};

export default MovieItem;
