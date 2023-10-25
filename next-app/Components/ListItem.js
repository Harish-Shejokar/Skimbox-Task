import { todoAction } from '@/ReduxStore/todoListReducer';
import React from 'react'
import { useDispatch } from 'react-redux'

const ListItem = ({ todo }) => {
    const dispatch = useDispatch();
  return (
    <li
      onClick={() => dispatch(todoAction.deleteItem(todo.id))}
      className="bg-blue-600 w-[60%] mx-auto mt-4 py-2 text-lg font-semibold px-4 cursor-pointer"
    >
      {todo.todo}
    </li>
  );
}

export default ListItem
