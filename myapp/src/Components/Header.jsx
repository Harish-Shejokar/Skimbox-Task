import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[100px] bg-zinc-900 flex justify-around items-center text-white">
      <span className=" text-2xl font-semibold">
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
      </span>
      <span className="text-2xl font-semibold">
        <NavLink className="text-white" to="/todo">
          ToDo
        </NavLink>
      </span>
      <span className="text-2xl font-semibold">
        <NavLink className="text-white" to="/movies">
          Movies
        </NavLink>
      </span>
      <span className="text-2xl font-semibold">
        <NavLink className="text-white" to="/ticTacToe">
          funZone
        </NavLink>
      </span>
    </div>
  );
};

export default Header;
