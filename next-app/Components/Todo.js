import { todoAction } from "@/ReduxStore/todoListReducer";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";

const Todo = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const inputRef = useRef();
  const addItemHandler = (e) => {
    e.preventDefault();
    const todo = inputRef.current.value;
    if (todo === "") return;
    dispatch(todoAction.addItem({ todo, id: Math.random() }));
    inputRef.current.value = "";
  };
  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={addItemHandler}
        className="border-4 border-blue-600 p-4 w-[60%] rounded-lg mt-4 mx-auto"
      >
        <input
          className="w-full py-3 bg-slate-100 text-xl font-extrabold text-black px-4"
          placeholder="todo"
          ref={inputRef}
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-600 py-2 w-full mt-2 text-xl font-semibold"
        >
          Add Todo
        </button>
      </form>
      {
        <ul>
          {todoList.map((item) => (
            <ListItem key={item.id} todo={item} />
          ))}
        </ul>
      }
    </>
  );
};
{
  /* <li key={item.id}>{item.todo}</li> */
}

export default Todo;
