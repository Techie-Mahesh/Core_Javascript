// Event Bubbling
// Event Bubbling is the bubbling up of an event through the DOM. When an event happens on a particular element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// Example
// In this example, when you click on the inner element, the event is first captured and handled by it, then propagated to outer elements.
const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// grandParent.addEventListener("click", () => {
//   console.log("Grand Parent");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent");
// });

// child.addEventListener("click", () => {
//   console.log("Child");
// });

// o/p: Child, Parent, Grand Parent

// Event Capturing
// Event Capturing is the opposite of Event Bubbling. When an event happens on a particular element, it first runs the handlers on its ancestors, then on the element itself.
// Example
// In this example, when you click on the inner element, the event is first captured and handled by outer elements, then propagated to the inner element.
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent");
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   () => {
//     console.log("Child");
//   },
//   true
// );

// o/p: Grand Parent, Parent, Child

// To prevent this issue we use event.stopPropagation() method in both bubbling and capturing
// Example
// In this example, when you click on the inner element, the event is first captured and handled by outer elements, then propagated to the inner element.
// grandParent.addEventListener(
//   "click",
//   e => {
//     console.log("Grand Parent");
//     e.stopPropagation();
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   e => {
//     console.log("Parent");
//     e.stopPropagation();
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   e => {
//     console.log("Child");
//     e.stopPropagation();
//   },
//   true
// );

// o/p: Grand Parent

grandParent.addEventListener("click", e => {
  console.log("Grand Parent");
  e.stopPropagation();
});
parent.addEventListener("click", e => {
  console.log("Parent");
  e.stopPropagation();
});
child.addEventListener("click", e => {
  console.log("Child");
  e.stopPropagation();
});
// O/P: depending on where we click the event will be stopped at that level

// Event Delegation
// Event Delegation is a technique in which we delegate a parent element as the listener for all the events that happen inside it.
// Example
// In this example, we have a list of items. When we click on an item, we log the item name.
// const list = document.getElementById("list");
// list.addEventListener("click", e => {
//   if (e.target.tagName === "LI") {
//     console.log(e.target.innerHTML);
//   }
// });
