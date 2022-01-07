// setting constants and variables

const container = document.querySelector('.container');
let rows = document.getElementsByClassName('gridRow');
let celss = document.getElementsByClassName('cell');

// creating a grid function of 16 x 16

function sketchGrid(){
    makeRows(16);
    makeColumns(16);
}

// making a grid with rows and columns

function makeRows(rowNum){
    for(r = 0; r <= rowNum; r++){
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum){
    for (i = 0; i < rows.length; i++){
        for(j = 0; j < cellNum; j++){
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = "cell"
        }
    }
}