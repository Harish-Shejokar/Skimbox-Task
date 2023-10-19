import React from "react";
import FactListItem from "./FactListItem";

const FactPatt = () => {
  return (
    <>
      <h1>Factory Pattern</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <FactListItem />
        <FactListItem />
      </div>
    </>
  );
};

export default FactPatt;
