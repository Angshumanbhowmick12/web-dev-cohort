

function shinyDiamondRug(n) {
    let diam='';
 
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
       diam +=' ';
      }
      for(let k=1;k<=(2*i -1);k++){
       diam +='*'
      }
      diam+='\n'
 
    }
 
    for(let i=n-1;i>=1;i--){
     for(let j=1;j<=n-i;j++){
       diam +=' '
     }
     for(let k=1;k<=(2*i-1);k++){
       diam+='*'
     }
      diam +='\n'
    }
    return diam.trimEnd();
 }
 
 
   
 
 // You just need to implement the shinyDiamondRug function
 const readline = require('readline');
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });
 
 rl.on('line', (input) => {
   const n = parseInt(input.trim(), 10);  // Get the number input
   const result = shinyDiamondRug(n);  // Call our function
   process.stdout.write(result);  // Output the result
 });
 