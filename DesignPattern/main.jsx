// Design Patten

// creational Pattern, structural Pattern and Behavioral pattern

// 1. Creational pattern
// => Singleton pattern - In this pattern we ensure that class has only one Instance or in simple we create one object and all operation done in that object only .

class todoList{
    constructor(task) {
        this.task = task;
    }
    addItem() {
        console.log("item added");
    }
    removeItem() {
        console.log("remove Item");
    }
}

const obj = new todoList("chai peeni hai");

Object.freeze(todoList);
todoList.name = "anthony"
console.log(todoList);
// const obj2 = new todoList("lunch");

const obj2 = {
    task:"to do task",
}
Object.freeze(obj2);
obj2.name = "harry";
console.log(obj2);// not able to add any property to object








