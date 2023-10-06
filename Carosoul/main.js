
// const p = document.querySelector("p");

const outerCont = document.getElementById("outerCont");
const innerCont = document.getElementById("inner");
let mouseClick = false;


outerCont.onmousedown = (event) => {
  // event.preventDefault();
  mouseClick = true;
  console.log("mousedown", mouseClick);
  // console.log("length from left of outer cont", event.offsetX);
  // console.log("length from left of Inner ",innerCont.offsetLeft);
  let startX = event.offsetX - innerCont.offsetLeft;
  
  document.addEventListener("mousemove", (event) => {
    // event.preventDefault();
    if (mouseClick === false) return;
    // console.log("mosuemove event length", event.offsetX);  
    
    // if (parseInt(innerCont.style.left) > 0) {
    //     innerCont.style.left = 0 + "px";
    //   return;
    // } 
    
    // if (parseInt(innerCont.style.left) <= -3395) {
    //   innerCont.style.left = 0 + "px";
    //   console.log("right overflow")
    //   return;
    // }
    
    innerCont.style.left = event.offsetX - startX + "px";

    // p.textContent = "value " + innerCont.style.left;
    console.log(parseInt(innerCont.style.left));
  });
  
  outerCont.addEventListener("mouseup", (e) => {
    mouseClick = false;
    // console.log("mouseUp", mouseClick);
    //cancelling mousemove event
    // document.removeEventListener("mousemove", () => {
    //   console.log("cancel mousemove event");
    // });
    if (parseInt(innerCont.style.left) > 0) {
      innerCont.style.left = 0 + "px";
      return;
    }

    if (parseInt(innerCont.style.left) <= -2683) {
      innerCont.style.left = -2683 + "px";
      console.log("right overflow");
      return;
    }

  });
};

// const slider = document.getElementById("slider");

// const item = document.querySelector("#item");
// item.onmousedown = (event) => {
//   event.preventDefault();
//   let shiftX = event.clientX - item.getBoundingClientRect().left;
//   // console.log(event.clientX, item.getBoundingClientRect().left);

//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", onMouseUp);

//   function onMouseMove(event) {
//     event.preventDefault();
//     // console.log("clientX - ",event.clientX);
//     // console.log("bounding - ", item.getBoundingClientRect().left);
//     // console.log("shift - ",shiftX)

//     let newLeft = event.clientX - shiftX - item.getBoundingClientRect().left;
//     console.log("newleft - ", newLeft);

//     let rightEdge = slider.offsetWidth - item.offsetWidth;
//     // console.log( "slider width",slider.offsetWidth,  `item offsetwidth ${item.offsetWidth}`);

//     if (newLeft < 0) {
//       console.log("################");
//       newLeft = 0;
//     }

//     if (newLeft > rightEdge) {
//       console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//       newLeft = rightEdge;
//     }
//     item.style.left = newLeft + "px";
//   }

//   // item.style.position = "absolute";
//   // // item.style.left = "20px";
//   // console.log(item.getBoundingClientRect(),event.clientX);
//   // moveAt(event.pageX, event.pageY);
//   // document.addEventListener("mousemove", onMouseMove);

//   // function moveAt(pageX, pageY) {
//   //   if (pageX >= 880) {
//   //     console.log("overflow");
//   //     item.style.left = 889 + "px";
//   //   } else {
//   //     item.style.left = pageX + 0 + "px";
//   //     // item.style.top = pageY - 1 + "px";
//   //   }
//   // }

//   // function onMouseMove(event) {
//   //   console.log(event.pageX,event.clientX);
//   //   moveAt(event.pageX, event.pageY);
//   // }

//   function onMouseUp() {
//     console.log("onmouseup event");
//     document.removeEventListener("mouseup", onMouseUp);
//     document.removeEventListener("mousemove", onMouseMove);

//     // item.onmouseup = null;
//   }
// };
// item.ondragstart = function () {
//   console.log("dragStart");
//   return false;
// };

// const ball = document.getElementById("ball");

// // console.log(ball.offsetHeight);

// ball.onmousedown = (event) => {
//   // console.log("mouseDown triggered")
//   // console.log(event);
//   ball.style.position = "absolute";
//   // console.log("pageX - ", event.pageX, "pageY - ", event.pageY);
//   document.addEventListener("mousemove", onMouseMove);

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     ball.style.left = pageX - 10 + "px";
//     // ball.style.top = pageY - 10 + "px";
//   }

//   function onMouseMove(event) {
//     console.log(event.pageX);
//     moveAt(event.pageX, event.pageY);
//   }

//   ball.onmouseup = function () {
//     console.log("onmouseup event");
//     document.removeEventListener("mousemove", onMouseMove);
//     // console.log(ball.onmouseup);
//     ball.onmouseup = null;
//   };

//   ball.ondragstart = function () {
//     console.log("dragStart");
//     return false;
//   };
// };
