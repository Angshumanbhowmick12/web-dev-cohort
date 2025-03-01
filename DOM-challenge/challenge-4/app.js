/**
 * Write your challenge solution here
 */

const task = document.querySelector(".task-input")
const addBtn = document.querySelector(".add-button")
const tasklist = document.querySelector(".task-list")
const totalTask = document.getElementById("totalTasks")
const completedtask = document.getElementById("completedTasks")
let emptylist=document.querySelector(".empty-list")

let totaltasks=0
let completedTask=0

addBtn.addEventListener('click',()=>{

    if(task.value !==""){

    emptylist.style.display="none" 

    const li= document.createElement("li")
    li.classList="task-item"

    const checkbox = document.createElement("input")
    checkbox.type="checkbox"
    checkbox.classList="complete-checkbox"
    li.appendChild(checkbox)


    const text=document.createElement('p')
    text.innerText=task.value
    text.classList="task-text"
    li.appendChild(text)


    const dlt= document.createElement('button')
    dlt.innerText="Delete"
    dlt.classList = "delete-button"
    li.appendChild(dlt)


    tasklist.appendChild(li)
    totaltasks++;
    totalTask.innerText = `Total tasks: ${totaltasks}`


    dlt.addEventListener('click',()=>{
        tasklist.removeChild(li)
        totaltasks--;
        //console.log(totaltasks);
        totalTask.innerText = `Total tasks: ${totaltasks}`

        if(totaltasks === 0){
            emptylist.style.display=""
        }
        
    })

    checkbox.addEventListener('click',(e)=>{
        if(e.target.checked){
            li.classList.add('completed')
            completedTask++;
            completedtask.innerText = `Completed: ${completedTask}`
        }else{
            li.classList.remove('completed')
            completedTask--;
            completedtask.innerText = `Completed: ${completedTask}`
        }
    })

   




} 

task.value= ""
})



    
    




