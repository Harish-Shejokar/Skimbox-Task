import React from "react";

const Item = ({ item }) => {
  const { text, id, deleteSelf } = item;
  return (
    <div
      onClick={() => {
        deleteSelf();
      }}
      style={{
        padding: "10px",
        backgroundColor: "aliceblue",
        width: "100px",
        fontWeight: "bold",
        color: "black",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      {text}
    </div>
  );
};

export default Item;
