import React, { useContext, useRef } from "react";
import Card from "./Card";
import ListCtx from "./Context/ListCtx";
import List from "./List/List";
import { useDispatch } from "react-redux";
import { listAction } from "./Store/ListStore";

const Form = () => {
  const dispatch = useDispatch();
  // const listCtx = useContext(ListCtx);
  const inputValue = useRef();


  const updateTodo = (elem) => {
    console.log("updatetodo", elem);
    inputValue.current.value = elem.task;
  }

  const addTask = (e) => {
    e.preventDefault();
    const task = inputValue.current.value;
    if (task === "") return;
    // listCtx.addItemToList(task);
    dispatch(listAction.addItem({ id:Math.random().toFixed(2),task }));
    inputValue.current.value = "";
  };

  return (
    <>
      <Card>
        <form>
          <h1 className="text-center text-2xl font-bold">Todo app</h1>
          <input
            className="p-2 w-full border border-slate-900 mt-2 font-bold text-xl"
            ref={inputValue}
            placeholder="add task"
            name="name"
            autoFocus
            required
          />
          <button
            onClick={addTask}
            className="w-full bg-slate-900 text-white py-2 font-bold text-xl mt-2 rounded"
          >
            Add
          </button>
        </form>
      </Card>
      <List setTodo={updateTodo} />
    </>
  );
};

export default Form;
