import React from 'react'
import SingleListItem from './singleListItem';


const SingleTonPatt = () => {
  return (
    <>
      <h1>Singleton Pattern</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <SingleListItem />
        <SingleListItem />
      </div>
    </>
  );
}

export default SingleTonPatt;
