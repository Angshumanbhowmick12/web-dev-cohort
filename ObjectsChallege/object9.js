// You just need to implement the deepClone function
function deepClone(obj) {
    // Return a deep copy of obj
   const obj1= JSON.parse(JSON.stringify(obj))
  
   return obj1
    
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj } = JSON.parse(input);
    const result = deepClone(obj); 
    process.stdout.write(JSON.stringify(result));
  });


//   function deepClone(obj){
//     if(obj === null || typeof obj !== "object"){
//         return obj;
//     }
//     let clone= Array.isArray(obj) ? [] : {}

//     for (let key in obj){
//         clone[key]=deepClone(obj[key])
//     }

//     return clone;
//   }