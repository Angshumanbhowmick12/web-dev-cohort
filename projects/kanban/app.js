const todoB = document.getElementById("todo");
const progressB = document.getElementById("progress");
const completeB = document.getElementById("complete");

const todoBtn = document.getElementById("todo-btn");
const progressBtn = document.getElementById("progress-btn");
const completeBtn = document.getElementById("complete-btn");

const allItems = document.querySelectorAll(".item");
const allBoard = document.querySelectorAll(".board");
let boards = [];

function renderBoards() {
  boards = JSON.parse(localStorage.getItem("kanbanBoard") || []);
  console.log(boards);

  boards.forEach((boardData) => {
    // If an existing board is not found, create a new board

    boardData.tasks.forEach((task) => {
      const card = crearteCard(task.text, task.date);

      document.querySelector(".bd").appendChild(card);
    });
  });

  //   boards[0].tasks.forEach(task => {
  //     todoB.appendChild(crearteCard(task.text, task.date));
  //     console.log(task);
  //   });
  //   boards[1].tasks.forEach((task) => {
  //     progressB.appendChild(crearteCard(task.text, task.date));
  //     console.log(task);
  //   });
  //    todoB.appendChild(crearteCard(boards[0].tasks[0].text,boards[0].tasks[0].date))
  //    console.log(boards[0].tasks[0]);
}



function saveData() {
  document.querySelectorAll(".board").forEach((board) => {
    const boardData = {
      heading: board.querySelector(".dot").textContent.trim(),
      tasks: [],
    };
    board.querySelectorAll(".item").forEach((item) => {
      boardData.tasks.push({
        text: item.querySelector(".card-text").textContent,
        date: item.querySelector("small").textContent,
      });
    });
    boards.push(boardData);
  });

  //console.log(boards);

  localStorage.setItem("kanbanBoard", JSON.stringify(boards));

  //console.log(localStorage.getItem('kanbanBoard'));
}

// function getData() {
//   // console.log(JSON.parse(localStorage.getItem('kanbanBoard') || []));

//   const storedData = JSON.parse(localStorage.getItem("kanbanBoard") ?? []);
//   return storedData;
// }

function attachDragEvents(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });

  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

function crearteCard(text, date) {
  const card = document.createElement("div");
  card.classList.add("item");
  card.innerHTML = `
    <p class="card-text">${text}</p>
    <div>
    <div> <button id="edit">✏️</button>
     <button id="del">🗑</button> 
     </div>
     <small>${date}</small>
    </div>
    
    
    `;
  card.setAttribute("draggable", true);

  attachDragEvents(card);

  card.querySelector("#edit").addEventListener("click", () => {
    const cardText = card.querySelector(".card-text");
    const currtext = cardText.textContent;
    const newText = prompt("Edit card:", currtext);

    if (newText) {
      cardText.textContent = newText;
      saveData();
    }
  });

  card.querySelector("#del").addEventListener("click", () => {
    const popup = confirm("Are you sure want delete this card");
    if (popup) {
      card.remove();
      saveData();
    }
  });

  return card;
}

function createBoard(heading) {
  const newBoard = document.createElement("div");
  newBoard.classList.add("board");
  newBoard.innerHTML = `<div class="bd">
                  <h4 class="dot"> <p class="board-dot"></p>${heading}<small class="date">${new Date().toLocaleDateString()}</small></h4>
                  </div>`;
  document.querySelector(".container").appendChild(newBoard);
  console.log(newBoard);
  attachDragOver(newBoard);
  saveData();
  return newBoard;
}

todoBtn.addEventListener("click", () => {
  let input = prompt("What is the task");

  if (!input) return;

  const card = crearteCard(input, new Date().toLocaleDateString());
  todoB.appendChild(card);
  saveData();
});

// todoBtn.addEventListener('click',()=>{
//     let input = prompt("What is the task")

//     if(!input) return;

//     const card=document.createElement('div')
//     card.classList.add('item')
//     card.innerHTML=`
//     <p class="card-text">${input}</p>
//     <div>
//     <div> <button id="edit">✏️</button>
//      <button id="del">🗑</button>
//      </div>
//      <small>${new Date().toLocaleDateString()}</small>
//     </div>

//     `
//     card.setAttribute('draggable', true)

//     attachDragEvents(card)
//     todoB.appendChild(card)

//     card.querySelector("#edit").addEventListener('click',()=>{
//         const cardText=card.querySelector(".card-text")
//         const currtext= cardText.textContent
//         const newText= prompt("edit card:",currtext)

//         if(newText){
//             cardText.textContent=newText
//         }

//     })

//     card.querySelector('#del').addEventListener('click',()=>{
//         const popup=confirm("Are you sure want delete this card")
//         if (popup) {
//             card.remove();
//         }
//     })
// })

const addBorad = document.querySelector(".add-board");

addBorad.addEventListener("click", () => {
  let heading = prompt("Add new Board");
  if (!heading) {
    return;
  }
  // const newBoard= document.createElement('div')
  // newBoard.classList.add('board')
  // newBoard.innerHTML = `<div class="bd">
  //               <h4 class="dot"> <p class="board-dot"></p>${heading}<small class="date">${new Date().toLocaleDateString()}</small></h4>
  //               </div>`
  // document.querySelector(".container").appendChild(newBoard)
  // console.log(newBoard);
  // attachDragOver(newBoard)
  createBoard(heading);
});

allItems.forEach((items) => attachDragEvents(items));

function attachDragOver(board) {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const flyElement = document.querySelector(".flying");
    // console.log(board,"kaha hai tu ",flyElement);

    board.querySelector(".bd").appendChild(flyElement);
    saveData();
  });
}

allBoard.forEach((board) => attachDragOver(board));
