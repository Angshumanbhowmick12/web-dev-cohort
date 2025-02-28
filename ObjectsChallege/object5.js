// You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
  
    
    if(typeof user === "object"){
      let result= Object.keys(user).length
      return result
    }else if( Object.keys(user).length === 0){
        return 0
    }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { user } = JSON.parse(input);
    const result = countProperties(user);
    process.stdout.write(JSON.stringify(result));
  });