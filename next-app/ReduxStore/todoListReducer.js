const { createSlice } = require("@reduxjs/toolkit");


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList :[],
    },
    reducers: {
        addItem(state, action) {
            // console.log(action.payload);
            const list = state.todoList;
            state.todoList = [...list, action.payload];
            // console.log(state.todoList)
         },
        deleteItem(state, action) {
            const list = state.todoList;
            const newList = list.filter(todo => todo.id !== action.payload);
            state.todoList = newList;
         },
        updateItem() { },
        
    }
})

export const todoAction =  todoSlice.actions;

export default todoSlice.reducer;