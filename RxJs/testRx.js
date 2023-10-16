import { Observable,Subject,observeOn,asyncScheduler } from "rxjs";
import { of } from "rxjs";
import { map, reduce, filter } from "rxjs/operators";

// Observable
// An observable is a function that creates an observer and attaches it to the source where values are expected, for example, clicks, mouse events from a dom element or an Http request, etc.

//Observer is the object which give methods like - next,error and complete to interact with source

// Subscribe- When the observable is created, to execute the observable we need to subscribe to it. It can also be used to cancel the execution.

var observer = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next("My First Observable");
    subscriber.next("second Observable");
    subscriber.complete();
  } catch (error) {
    subscriber.error("some----Error");
  }
});

// observer.subscribe(
//   (x) => console.log(x),
//   (e) => console.log(e),
//   () => console.log("Observable is complete")
// );

let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let case1 = test1.pipe(
  filter((x) => x % 2 === 0),
  reduce((acc, one) => acc + one, 0)
);
// case1.subscribe((x) => console.log(x));

// unsubscribe method cancels objeservable and its methods
// case1.unsubscribe();


// Subject
// A subject is an observable that can talk to many observers. Consider a button with an event listener, the function attached to the event using addlistener is called every time the user clicks on the button similar functionality goes for subject too.


const subjectTEst = new Subject();

subjectTEst.subscribe({
    next:(val)=>console.log(`test - ${val}`)
})

subjectTEst.subscribe({
    next: (val) => console.log(`test2 - ${val}`)
})

// both event or method triggered at same time
//we can handle error and complete things by subject just replace error or complete in place of next

// subjectTEst.next("first")
// subjectTEst.next("second")


// Schedulers
// A scheduler controls the execution of when the subscription has to start and notified.

const secondObserver = new Observable(
    function subscribe(subscribe) {
        subscribe.next("second observer created"); 
        subscribe.complete()
    }
).pipe(
    observeOn(asyncScheduler)
)

secondObserver.subscribe(
    (temp) => console.log(temp),
    (e) => console.log(e),
console.log("observer completed"));

console.log("end");

// console.log(!null);