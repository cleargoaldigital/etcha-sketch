//  setting constants and initializing values

const container = document.getElementById("container");
const question = document.querySelector('.question')


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 1; i <= (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

container.addEventListener('click', () => {
  container.style.backgroundColor = 'orange';
});

question.addEventListener('click', () => {
  // container.textContent = " ";
  let userReply = Number(prompt('How many grids are there in a row?'))

  // let cell = document.createElement("div");
  // cell.textContent = (i);
  // container.appendChild(cell).className = "grid-item";
 // { for (i = 1; i <= userReply; i++)}
});