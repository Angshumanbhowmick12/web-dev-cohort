// You just need to implement the totalStars function
function totalStars(starLevels) {
    let len=0;
      for(let i=0;i<starLevels.length;i++){
          for(let j=0;j<starLevels[i].length;j++){
            len=len+ starLevels[i][j].length;
          }
      }
      return len;
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    // Parse input (expected to be a JSON string array of star levels)
    const starLevels = JSON.parse(input);
  
    // Call our function
    const result = totalStars(starLevels);
  
    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
  });
  // Please don't remove the code above
  