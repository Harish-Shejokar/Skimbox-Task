import React, { useState } from "react";
import ListItem from "../../ListItem";
import todoInstance from "./singleTodo";

const SingleListItem = () => {
  const store = todoInstance;
  const [todo, setTodo] = useState(store.getTodo());
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

export default SingleListItem;
