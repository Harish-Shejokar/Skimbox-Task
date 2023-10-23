import {
  configureStore,
  createAsyncThunk,
  createSlice,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const listSlice = createSlice({
  name: "List",
  initialState: {
    allTodo: [],
    movies: [],
  },
  reducers: {
    addItem(state, action) {
      state.allTodo = [...state.allTodo, action.payload];
    },
    deleteItem(state, action) {
      console.log(action.payload);
      const updatedTodo = current(state.allTodo).filter(
        (item) => item.id !== action.payload
      );
      // console.log(updatedTodo);
      state.allTodo = updatedTodo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOperation.pending, (state, action) => {
      console.log("loading....");
    
    });
    builder.addCase(fetchOperation.rejected, (state) => {
      console.log("rejected...");
    
    });
    builder.addCase(fetchOperation.fulfilled, (state, action) => {
      // console.log("fulfilled");
      state.movies = action.payload;
      console.log(action.payload);
      // return action.payload;
    });
  },
});


useEffect(() => {
  
},[])

export const listAction = listSlice.actions;

export const fetchOperation = createAsyncThunk("fetchOperation", async () => {
  const response = await axios.get(
    `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
  );
  return response.data;
});


export const Store = configureStore({
  reducer: {
    List: listSlice.reducer,
  },
});
