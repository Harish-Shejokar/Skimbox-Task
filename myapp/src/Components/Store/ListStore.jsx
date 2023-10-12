import { configureStore, createSlice ,current} from "@reduxjs/toolkit";


const listSlice = createSlice({
    name: "List",
    initialState: {
        allTodo: [],
    },
    reducers: {
        addItem(state, action) {
            state.allTodo = [...state.allTodo, action.payload];
        },
        deleteItem(state, action) {
            console.log(action.payload);
            const updatedTodo = current(state.allTodo).filter(item => item.id !== action.payload);
            // console.log(updatedTodo);
            state.allTodo = updatedTodo;
        },
       

    }
})

export const listAction = listSlice.actions;

export const Store = configureStore({
    reducer: {
        "List":listSlice.reducer,
    }
})

