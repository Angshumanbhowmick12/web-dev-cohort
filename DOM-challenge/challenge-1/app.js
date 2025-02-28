/**
 * Write your challenge solution here
 */

let bg= document.getElementById('body')
let btn=document.getElementById('toggleButton')
let changeStatus=document.getElementById('status')
let bulbContainer=document.getElementsByClassName('bulb-container')
let bulb= document.getElementById('bulb')





btn.addEventListener('click',()=>{

    if (btn.innerText === "Turn On") {
    bulb.classList.remove('off')
    bg.classList.add("dark-mode")
    btn.innerText="Turn Off"
    changeStatus.innerText= "Status: ON"
    } else {
    bulb.classList.add('off')
    bg.classList.remove("dark-mode")
    btn.innerText="Turn On"
    changeStatus.innerText= "Status: Off"
    }
    
})
