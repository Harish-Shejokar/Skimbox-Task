//mocha test tool
// describe("first test my mocha", function () {
//   it("first test", function () {
//     console.log("working");
//   });

//   it("seond test", function () {
//     console.log("second test");
//   });
// });

// tranpiler and polyfills tools make newer syntax or newer functionalities supported in outdated browser version

// objects

// for multi_line object property we can use []
let obj = {
  name: "hary",
  "his age": 32,
};

// console.log(obj["his age"]);

//Symbol
let id = Symbol("symbol dscripiton .....");

// console.log(id.description);

//object refrencing
let user = {
  name: "gary",
  age: "93",
};

let clone = Object.assign({}, user);
// console.log("clone", clone);//both refrence are diff

// functional constructor
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("hari", 24);

// console.log(u1);

// converting object from refrence to primitive type
let userr = {
  name: "John",

  toString() {
    return this.name;
  },
};

// console.log(userr); // toString -> John
// console.log(typeof(userr + 500)); // toString -> John500

// let userAdmin = {
//   admin() {
//     console.log("hey how u doin");
//   }
// }

// userAdmin.admin();

// optional chaining " ?. "
let Usser = {}; // user has no address

// In Usser not available and then obvious address and street not available so it will give undefined with error but we dont want error then we can use - Optional chaining

// console.log(Usser?.address?.street); // undefined (no error)

//Array methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.splice(2);
// console.log("res", res);

let fruits = ["Apple", "Orange", "Apple"];

// console.log(arr.indexOf("Apple")); // 0 (first Apple)
// console.log(fruits.lastIndexOf("Apple")); // 2 (last Apple)

// filter function
// console.log(fruits.filter(item => item === "Apple"))

// sort
let reverseArr = arr.sort((a, b) => b - a);
// console.log("reverse Array",reverseArr);

// split - it convert string into array
let stri = "skdfjksjf";
// console.log(stri.split(''));

let testt = ["Bilbo", "Gandalf", "Nazgul"];

let strrr = testt.join("_"); // glue the array into a string using ;

// console.log(strrr);

// reduce in array - it returns single value and perform opration on every elem of array
const reduceResult = arr.reduce((sum, curr) => sum + curr);

// console.log(reduceResult);

// groupById method
// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);
// console.log(usersById)

// zeros avoid trick
// console.log(1e3 === 1000)
// console.log(1e-3 === 1 / 1000);

let skdw = [238, 238, 23848, 832, 283, "skdjf83", "sjd", 2];

//slice usage
// console.log(skdw.slice(2, 5));

// nested destructuring
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { width },
  items: [elem1],
} = options;
// console.log(width, elem1);

// slice , substring, substr

let abcd = " _ thequickbrownfox   ";

const temp = abcd.substring(0, 3);
// console.log(temp);

// trim - it removes beginning  and ending spaces from string

const trim = abcd.trim();
// console.log(trim);

// for of loop
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// for (let elem of recipeMap.values()) console.log(elem);

let newUser = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

// console.log(JSON.parse(newUser));

//call, apply and bind -for creating explicit binding
let Obj = {
  name: "abc",
  age: "2398",
};

function printDetails(country) {
  console.log(this.name, this.age, country);
}

// printDetails.call(Obj, "India");
// printDetails.apply(Obj, ["Mexico"]);

//GENERATOR FUNCITON

function* gentFun() {
  yield "First";
  yield "second";
  yield "third";
}

let gen = gentFun();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// usage of altKey , shiftKey with MouseEvent
/* const button = document.querySelector("button");
button.onclick = function (event) {
  console.log("abcdef")
  if (event.altKey && event.shiftKey) {
    alert('Hooray!');
  }
}
 */

// cookie, local and session storage

let data = ["abc", "def", "ghi"];

// document.cookie = `user=${data}`;

// localStorage.setItem("localData", "h@gmail.com");

// sessionStorage.setItem("sessionData", "session data");

// animation =>>>>
/*let flag1 = true;
document.getElementById("animBtn").onclick = () => {
  console.log("btn event")
  if (flag1) {
     document.querySelector("button").style.backgroundColor = "lightseagreen";
    document.querySelector("button").style.left = "500px";
    flag1 = false;
    
  } else {
    flag1 = true;
    document.querySelector("button").style.left = "0px";
    document.querySelector("button").style.backgroundColor = "white";
   
  }
 
} */ const ball = document.getElementById("ball");

// console.log(ball.offsetHeight);

ball.onmousedown = (event) => {
  // console.log("mouseDown triggered")
  // console.log(event);
  ball.style.position = "absolute";
  console.log("pageX - ", event.pageX, "pageY - ", event.pageY);
  document.addEventListener("mousemove", onMouseMove);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - 10 + "px";
    ball.style.top = pageY - 10 + "px";
  }

  function onMouseMove(event) {
    console.log(event.pageX);
    moveAt(event.pageX, event.pageY);
  }

  ball.onmouseup = function () {
    console.log("onmouseup event");
    document.removeEventListener("mousemove", onMouseMove);
    // console.log(ball.onmouseup);
    ball.onmouseup = null;
  };

  ball.ondragstart = function () {
    console.log("dragStart")
    return false;
  };

};


// key event by keyboard

/* document.addEventListener("keypress", (e) => {
   alert(`${e.key} - by keypress event`)
  
}) */
/* document.addEventListener("keyup", (e) => {
   prompt(`${e.key} - by KEYUP event`)
  
})*/


// regex in advance
// regex has few flags which we can incluede after second slash , which are g, i , m and u
 
let someText = "test@gmail.com";

let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// console.log(someText.match(pattern));
// console.log("hello how you Hello".match(/Hello/gi));




// variable formatting by regex
let underscore = "_";
let regex = new RegExp("^[a-z]+" + underscore + "[a-z]+$");

// console.log(regex.test("harry_potter"));
// console.log(regex.test("hermionee Granger"));

// function formChecker(e) {
//   // e.preventDefault();
//   console.log("working");
// }