// stack under the hood
class node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let t = this.first;
      this.first = newNode;
      this.first.next = t;
    }

    this.size++;
  }

  pop() {
    let t = this.first;

    if (this.first === null) {
      return -1;
    } else if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;

    return t.value;
  }
}

let s1 = new stack();
s1.push(22);
s1.push(33);
s1.push(44);
s1.push(55);

// console.log(s1.pop());
// console.log(s1.first);
// console.log(s1.last);
// console.log(s1.size);

// Queue implementation

class Q {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new node(val);
    if (this.first === null) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.last === null) return -1;
    let t = this.first;
    if (this.first === this.last) this.first = this.last = null;
    else {
      this.first = this.first.next;
    }
    this.size--;
    return t.value;
  }
}

let q1 = new Q();
q1.enqueue(99);
q1.enqueue(88);
q1.dequeue();
// q1.dequeue();

// console.log(q1.first.value);

//Singly Linked List Implementation

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new node(value);

    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.head = this.tail = null;
    }
    let curr = this.head;
    let newTail = null;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    let temp = curr.value;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return temp;
  }
  //it removes first elem of LL
  shift() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let t = this.head.value;
      this.head = this.tail = null;
      this.length--;
      return t;
    }
    let temp = this.head.value;
    this.length--;
    this.head = this.head.next;
    return temp;
  }
  //this method insert elem at head place
  unshift(value) {
    let newNode = new node(value);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  get(index) {
    if (index > this.length && index < 0) return "Invalid Index";
    let pointer = this.head;
    let counter = 0;
    while (counter !== index) {
      pointer = pointer.next;
      counter++;
    }
    return pointer;
  }

  insert(index, val) {
    let newNode = new node(val);
    if (this.length === 0) this.head = this.tail = newNode;

    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curr = this.head;
      let prev = null;
      let counter = 0;
      while (counter !== index) {
        prev = curr;
        curr = curr.next;
        counter++;
      }
      prev.next = newNode;
      newNode.next = curr;
    }
    this.length++;
  }

  set(index, val) {
    if (index < 0 || index > this.length) return "not valid index";

    let curr = this.head;
    let counter = 0;
    while (counter !== index) {
      counter++;
      curr = curr.next;
    }
    curr.value = val;
  }

  reverse() {
    let H = null;
    let curr = this.head.next;
    H = this.head;
    H.next = null;
    this.tail = H;

    let Next = null;
    while (curr) {
      Next = curr.next;
      curr.next = H;
      H = curr;
      curr = Next;
    }
    this.head = H;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(`value - ${curr.value}`);
      curr = curr.next;
    }
  }
}

let list = new LinkedList();

list.push(55);
list.push(44);
list.push(33);
// console.log(list.pop())
// console.log("head - ",list.head.value,"tail - ",list.tail.value);
// console.log(list.shift());
// console.log(list.unshift(9999));
// console.log(list.get(0));

// console.log(list.insert(1, 678));
// list.set(1, 777777777);
// list.reverse();
// list.print();
// console.log(list)

// doubly LinkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
      newNode.prev = curr;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let curr = this.head;
      let newTail = null;
      while (curr.next) {
        newTail = curr;
        curr = curr.next;
      }
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }
}

const dl = new DoublyLL();

dl.push(11);
dl.push(22);
dl.push(33);
dl.pop();
// dl.print();
// console.log(dl);

// trees

class tNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
  }

  push(value) {
    let newNode = new tNode(value);
    if (this.root === null) this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(value) {
    this.traversal(this.root, value);
  }
  
  traversal(root, value) {
    
    // if (root === null || root.value === value) return root;
    // else if (value < root.value) {
    //   this.traversal(root.left,value);
    // } else {
    //   this.traversal(root.right,value);
    // }

  }
}

let tree = new binaryTree();
tree.push(10);
tree.push(8);
tree.push(7);
tree.push(15);
tree.push(22);
console.log(tree);
console.log(tree.search(10));
