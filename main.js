// setting constants and variables

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);


/**
 * let n=16, i=-1, j=0, s='';

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= `<div class="cell"> ${(i*n+j).toString(16)} </div>`;
  s+= '</div>'
}

container.innerHTML = s;
.row { display: flex; font-size: 9.5px; text-align: center; color: red }
.cell { width: 10px; height: 10px; margin: 1px; border: 1px solid black;}
<div id="container"></div>
 */

/**
 * const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
 */

/**
 
let n=16, i=-1, j=0, s='';

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= `<div class="cell"> ${(i*n+j).toString(16)} </div>`;
  s+= '</div>'
}

container.innerHTML = s;
 */