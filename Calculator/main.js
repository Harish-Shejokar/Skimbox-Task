const allClear = document.getElementById("clear");
const equalTo = document.getElementById("equalTo");
const input = document.getElementById("input");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");

const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");

const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");

const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const percent = document.getElementById("percent");

let actualValue = "";

allClear.onclick = function () {
  //  console.log(input.value);
  actualValue = "";
  input.value = "";
};

divide.onclick = () => {
  actualValue = input.value + "/";
  input.value += "÷";
};
multiply.onclick = () => {
  actualValue += "*";
  input.value += "×";
};

minus.onclick = () => {
  actualValue += "-";
  input.value += "-";
};

plus.onclick = () => {
  actualValue += "+";
  input.value += "+";
};

nine.onclick = () => {
  actualValue += "9";
  input.value += "9";
};
eight.onclick = () => {
  actualValue += "8";
  input.value += "8";
};
seven.onclick = () => {
  actualValue += "7";
  input.value += "7";
};
six.onclick = () => {
  actualValue += "6";
  input.value += "6";
};
five.onclick = () => {
  actualValue += "5";
  input.value += "5";
};
four.onclick = () => {
  actualValue += "4";
  input.value += "4";
};
three.onclick = () => {
  actualValue += "3";
  input.value += "3";
};
two.onclick = () => {
  actualValue += "2";
  input.value += "2";
};
one.onclick = () => {
  actualValue += "1";
  input.value += "1";
};

zero.onclick = () => {
  actualValue += "0";
  input.value += "0";
};
dot.onclick = () => {
  actualValue += ".";
  input.value += ".";
};

percent.onclick = () => {
  // console.log(input.value / 100 )
  actualValue += "/100*";
  input.value += "%";
};

equalTo.onclick = () => {
  // input.value = parseInt(input.value);
  try {
    if (actualValue === "") {
      input.value = "";
    } else {
      console.log(input.value, actualValue);
      let ans = eval(actualValue);
      // let ans = Function("return " + actualValue)();
      input.value = ans;
    }
  } catch (error) {
    console.log("Error", error);
    input.value = "Error";
  }
};









/* document.querySelectorAll(".btn").forEach((key) => {
  // console.log(key);
  key.addEventListener("click", () => {
    console.log(key.innerHTML);

    if (key.innerHTML === "=") {
      try {
        if (actualValue === "") {
          input.value = "";
        } else {
          // console.log(input.value, actualValue);
          let ans = eval(actualValue);
          // let ans = Function("return " + actualValue)();
          input.value = ans;
        }
      } catch (error) {
        console.log("Error", error);
        input.value = "Error";
      }
    } else if (key.innerHTML === "÷") {
      actualValue = input.value + "/";
      input.value += "÷";
    } else if (key.innerHTML === "×") {
      actualValue += "*";
      input.value += "×";
    } else if (key.innerHTML === "C") {
      actualValue = "";
      input.value = "";
    } else if (input.innerHTML === "%") {
       actualValue += "/100*";
       input.value += "%";
    } else {
      console.log(key.innerHTML);
      actualValue += key.innerHTML;
      input.value += key.innerHTML;
    }
  });
}); */
