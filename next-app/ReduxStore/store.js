const { configureStore } = require("@reduxjs/toolkit");
const { default: todoListReducer } = require("./todoListReducer");


export default configureStore({
    reducer: {
        todo: todoListReducer,
    }
})