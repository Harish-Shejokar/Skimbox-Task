import { useState } from "react";
import React from "react";
import ListItem from "../../ListItem";
import Todo from "./Todo";

const TodoList = () => {
  const [store] = useState(new Todo());
  const [todo, setTodo] = useState(store.getTodo());
  // console.log(todo);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <button
          onClick={() => {
            store.addTodo(800 * Math.random().toFixed(2));
            setTodo([...store.getTodo()]);
          }}
          style={{
            backgroundColor: "lightseagreen",
            padding: "20px",
            margin: "10px",
          }}
        >
          Add Todo
        </button>
        <div>
          {todo.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
