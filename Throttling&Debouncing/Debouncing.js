// Debounce is a technique used to limit the number of times a function is called. It ensures that the function is called only after a certain amount of time has passed since the last time it was called. This is useful when you want to delay the execution of a function until after the user has stopped interacting with the UI.
// Real time example of debounce is search bar in google search or search bar in amazon, flipkart website

const myDebounce = (fn, delay) => {
  // Create a variable to store the timer
  let timer;
  return function (...args) {
    // Clear the timer if it is already set
    clearTimeout(timer);
    timer = setTimeout(() => {
      // Call the function with the arguments
      fn(...args);
    }, delay);
  };
};

const debouncedLogMessage = e => {
  console.log("hello", e.target.value);
};
const handleChange = myDebounce(debouncedLogMessage, 300);
