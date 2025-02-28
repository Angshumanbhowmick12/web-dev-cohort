/**
 * Write your challenge solution here
 */
let name = document.querySelector('#nameInput')
let job = document.querySelector('#jobInput')
let age = document.querySelector('#ageInput')
let bio = document.querySelector('#bioInput')

let viewName = document.getElementById('nameDisplay')
let viewJob = document.getElementById('jobDisplay')
let viewAge = document.getElementById('ageDisplay')
let viewBio = document.getElementById('bioDisplay')



name.addEventListener('input',()=>{
    if(name.value.length > 0){
        viewName.innerText = name.value;
    }
    else{
        viewName.innerText='Not provided'; 
    }
})

job.addEventListener('input',()=>{
    if (job.value.length > 0) {
        viewJob.innerText = job.value;
    } else {
        viewJob.innerText = 'Not provided'
    }
})

age.addEventListener('input',()=>{
    if(age.value>=18  && age.value<=120){
        viewAge.innerText = age.value;
    }else{
        viewAge.innerText = "Not provided"
    }
})

bio.addEventListener('input', ()=>{
    if(bio.value.length > 0){
        viewBio.innerText = bio.value;
    } else{
        viewBio.innerText = 'Not provided'
    }
})