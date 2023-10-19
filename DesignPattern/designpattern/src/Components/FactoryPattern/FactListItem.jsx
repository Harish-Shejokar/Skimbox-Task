import React, { useState } from "react";
import Item from "./Item";
import todoInstance from "./FactTodo";

const FactListItem = () => {
  const store = todoInstance;
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
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactListItem;
