function debounce(fn, delay) {
  console.log(arguments); // if i call this funtion with arguments like debounce('angshuman',10); its resturns   [Arguments] { '0': 'angshuman', '1': 10 }
  let myId; // store the variable

  return function (...args) {
    // passing the argument of copy value as args

    clearTimeout(myId); // clear the previous timout reference of myId

    myId = setTimeout(() => {
      // store the timeout funtion as referenc with myId

      fn.apply(this, args); // apply methods call the function with the given this value and arguments provides as an array

    }, delay); // execution the function with delay
  };
}

function greet(name){
    console.log(name);
    
}

const callFunc=debounce(()=>greet("angshuman"), 1000); 
callFunc() // when its fist call with arguments the myId is undefined so line no 8 is not executable then line no 10 calling with the delay
callFunc() // then second call with this arguments myId hold the reference of the previous call then line 8 excecute and clear the previous reference and the line 10 excute with fn 
callFunc() // last time only function call previous all the are deleted
