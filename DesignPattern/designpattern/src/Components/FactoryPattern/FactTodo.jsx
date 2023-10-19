const allTodo = [];
let Instance = null;
const createTodo = (todoText) => {
  const id = Date.now();
  return {
    id,
    text: todoText,
    deleteSelf() {
      const index = allTodo.findIndex((item) => item.id === id);
      allTodo.splice(index, 1);
    },
  };
};
class Todo {
  constructor() {
    if (Instance !== null) throw new Error("Already Instance is created");
  }
  addTodo(value) {
    allTodo.push(createTodo(value));
  }
  getTodo() {
    return allTodo;
  }
}
const todoInstance = new Todo();
Object.freeze(Todo);
export default todoInstance;
