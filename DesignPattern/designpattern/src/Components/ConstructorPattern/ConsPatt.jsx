import React from 'react'
import TodoList from './TodoList';

const ConsPatt = () => {
  return (
    <>
      <h1>Constructor Pattern</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <TodoList />
        <TodoList />
      </div>
    </>
  );
}

export default ConsPatt
