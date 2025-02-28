// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
     let school={
      name:name,
      age:age,
      grade:grade,
    
  } 
  
  if(typeof school.age!=="number"||school.age <=5 || typeof school.name!=="string" || school.name ===""||typeof school.grade!=="string"){
     return "Invalid input" 
  }
  else{
    return school
  }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { name, age, grade } = JSON.parse(input);
    const result = createStudentProfile(name, age, grade);
    process.stdout.write(JSON.stringify(result));
  });