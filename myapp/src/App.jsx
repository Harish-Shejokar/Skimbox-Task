import React, { useEffect, useContext, useImperativeHandle } from "react";
import Header from "./Components/Header";
import "./app.css";
import Form from "./Components/Form";
import ListCtx from "./Components/Context/ListCtx";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe";
import Movies from "./Components/Movies/Movies";
import StopWatch from "./Components/StopWatch";
import { useDispatch } from "react-redux";


const App = () => {
  // const Ctx = useContext(ListCtx);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const data = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/`);
      const response = await data.json();
      // response.slice(0, 2).forEach((elem) => {
      //   Ctx.addItemToList(elem.id);
      // });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
     
    <div className="">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Form />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/stopwatch" element={<StopWatch />} />
          {/* <Login /> */}

        </Routes>
    </div>
     
  );
};

export default App;
