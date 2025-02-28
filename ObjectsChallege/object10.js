// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    if(typeof obj !== 'object' || !keyPath.includes(".") || obj === null){
      return "Key not found"
    }
  
    let keys = keyPath.split(".");
    let current=obj
    for(let i of keys){
      if(current[i]=== undefined){
        return "Key not found"
      }
  
      current=current[i]
    }
  
    return current
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj, keyPath } = JSON.parse(input);
    const result = getNestedValue(obj, keyPath);
    process.stdout.write(JSON.stringify(result));
  });