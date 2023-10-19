class Todo {
  allTodo = [];
  constructor() {
    
  }
  addTodo(value) {
    this.allTodo.push(value);
  }
  getTodo() {
    return this.allTodo;
  }
}

export default Todo;
