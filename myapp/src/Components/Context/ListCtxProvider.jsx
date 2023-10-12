import React, { useState } from "react";
import ListCtx from "./ListCtx";

const ListCtxProvider = (props) => {
  const [list, setList] = useState([]);

  const addItemToList = (item) => {
    setList((prev) => {
      return [...prev, item];
    });
  };

  const context = {
    list,
    todoList: [],
    addItemToList,
  };

  return <ListCtx.Provider value={context}>{props.children}</ListCtx.Provider>;
};

export default ListCtxProvider;
