// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
// Real time example of throttling is scroll event in facebook news feed or scroll event in youtube video player or
// shooting game where we can shoot only one bullet at a time

const myThrottle = (fn, delay) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn(...args); // Call the function with the arguments
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
