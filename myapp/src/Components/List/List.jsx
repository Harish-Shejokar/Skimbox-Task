import React, { useContext } from "react";
import ListCtx from "../Context/ListCtx";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const List = ({setTodo}) => {
  const todoList = useSelector((state) => state.List.allTodo);
  console.log(todoList);
  // const listCtx = useContext(ListCtx);
  // const todoItems = listCtx.list.map((task) => (
  //   <ListItem key={Math.random()} item={task} />
  // ));

  const todoItems = todoList.map((elem) => (
    // console.log(elem.task)
    <ListItem key={Math.random()} elem={elem} setTodo={setTodo} />
  ));
  return (
    <>
      <ul className="w-[40rem] m-auto mt-[2rem] p-3 shadow-sm border-2 border-slate-900 rounded-xl">
        {todoItems.length > 0 ? (
          todoItems
        ) : (
          <p className="text-3xl text-center">No Task</p>
        )}
      </ul>
    </>
  );
};

export default List;
