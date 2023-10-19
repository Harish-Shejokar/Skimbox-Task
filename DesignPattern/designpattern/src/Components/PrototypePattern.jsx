import React from "react";

const PrototypePattern = () => {
  const Parent = {
    farm: "12 Acres of farmland",
    plot: "1 plot at Murtizapur",
  };

  const child = {
    Earning: "30k",
  };
  (child.__proto__ = Parent), console.log(child);
  return (
    <div>
      <h1>Prototype Pattern</h1>
    </div>
  );
};

export default PrototypePattern;
