// main goal of throttling is if you give me multiple request i don't need i get only 1 request
function throttling(fn, delay) {
  let myId = null; // variable to keep tarck of the timer
  // return throttled version
  return (...args) => {
    if (myId === null) {
      // if there is no timer currently running
      fn(...args); // execute the function
      myId = setTimeout(() => {
        // set a timer to clear the myId after the specified delay
        myId = null; // clear the myId to allow the main function to be executed again
      }, delay);
    }
  };
}

throttling()
throttling()
