import React from "react";
import { useDispatch } from "react-redux";
import { listAction } from "../Store/ListStore";

const ListItem = (props) => {
  // console.log(props)
  const { task ,id} = props.elem;
  const dispatch = useDispatch();
  
  
  const updateTodo = () => {
    // console.log("update event");
    dispatch(listAction.deleteItem(id))
    props.setTodo(props.elem);

  };
  const deleteTodo = () => {
    // console.log("delete event");
    dispatch(listAction.deleteItem(id));


  };
  return (
    <li className="text-center text-xl font-semibold mt-2 bg-slate-900 text-white flex justify-around items-center py-2">
      {task}
      <div>
        <button
          onClick={updateTodo}
          className="bg-yellow-400 text-black font-semibold text-xl rounded-lg p-2 me-4"
        >
          update
        </button>
        <button
          onClick={deleteTodo}
          className="bg-red-600 text-black font-semibold text-xl rounded-lg p-2"
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
