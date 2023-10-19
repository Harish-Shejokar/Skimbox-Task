import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchOperation } from "../Store/ListStore";

const Movies = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.List.movies);
  const [productList, setProductList] = useState([]);
  console.log(movieList);
  const movieData = async () => {
    const response = await axios(
      `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
    );
    console.log(response.data);
    setProductList(response.data);
  };

  useEffect(() => {
    // movieData();
    // setProductList();
    dispatch(fetchOperation());
    setProductList(movieList);
    console.log(productList, "------------------");

  }, []);
  // const movies = movieList.slice(0, 30);
  return (
    <div className="bg-black h-screen">
    console.log("===========")
      <ul className=" py-4 flex justify-evenly flex-wrap gap-4">
        {productList && productList.map((movie) => {
          return <MovieItem key={Math.random()} image={movie.Poster} />;
        })}
      </ul>
    </div>
  );
};

export default Movies;
