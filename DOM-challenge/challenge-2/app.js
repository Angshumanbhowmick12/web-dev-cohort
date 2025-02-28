/**
 * Write your challenge solution here
 */
let button=document.querySelectorAll("button")
let text=document.getElementById('mainHeading')

button.forEach((btn)=>{
     btn.addEventListener('click',()=>{
        switch(btn.innerText.toLowerCase()){
            case "red" :
                text.style.color="#e74c3c"
                break;
            case "green" :
                text.style.color="#2ecc71"
                break;
            case "blue" :
                text.style.color="#3498db"
                break;
            case "purple" :
                text.style.color="#9b59b6"
                break;
            case "reset":
                text.style.color="#34495e"
                 break;
        }
     })
})