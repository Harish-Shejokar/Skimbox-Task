import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
const Movies = () => {
  const [productList, setProductList] = useState([]);
  const movieData = async () => {
    const response = await axios(
      `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
    );
    console.log(response.data);
    setProductList(response.data);
  };
  useEffect(() => {
    movieData();
  }, []);
  // const movies = movieList.slice(0, 30);
  return (
    <div className="bg-black h-screen">
      <ul className=" py-4 flex justify-evenly flex-wrap gap-4">
        {productList.map((movie) => {
          return <MovieItem key={Math.random()} image={movie.Poster} />;
        })}
      </ul>
    </div>
  );
};

export default Movies;
