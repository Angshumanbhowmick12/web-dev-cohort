function invertedMountain(n) {
    let star='';
  
    for(let i=0;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        star += "*"
      }
      star+="\n"
  
    }
    return star.trimEnd()
  }
  
  // You just need to implement the invertedMountain function
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const n = parseInt(input.trim(), 10);  // Get the number input
    const result = invertedMountain(n);  // Call our function
    process.stdout.write(result);  // Output the result
  });
  