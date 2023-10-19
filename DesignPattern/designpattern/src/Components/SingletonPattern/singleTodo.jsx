const allTodo = [];
let Instance = null;
class Todo {
  constructor() {
    if (Instance !== null) throw new Error("Already Instance is created");
  }
  addTodo(value) {
    allTodo.push(value);
  }
  getTodo() {
    return allTodo;
  }
}
const todoInstance = new Todo();
Object.freeze(Todo);
export default todoInstance;
