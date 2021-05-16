function addRows(rowIndex) {
    if (rowIndex > mazeHeight) return 0
    const row = document.createElement("tr");
    addColumns(1, row, rowIndex)
    tbody.appendChild(row);
    addRows(rowIndex + 1)
}

function addColumns(colIndex, row, rowIndex) {

    if (colIndex > mazeWidth) return 0

    const col = document.createElement("td");
    col.style.backgroundColor = "#FFF";
    col.style['Border-right'] = 'red'
    col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);
    row.appendChild(col);

    addColumns(colIndex + 1, row, rowIndex)
}

const mazeWidth = 6;
const mazeHeight = mazeWidth;
let rowIndex, colIndex;
let currentCell;
const table = document.createElement("table");
const tbody = document.createElement("tbody");

addRows(1)

table.appendChild(tbody);

document.getElementById("maze_container").appendChild(table);

let directions = ['right', 'down', 'right', 'right', 'down', 'right', 'right', 'down', 'down', 'down'];
/*
function addDirections(len, horizontalIndex, verticalIndex) {
    if (horizontalIndex >= mazeWidth && verticalIndex >= mazeWidth) return 0

    let options = ['right', 'left', 'up', 'down'];
    horizontalIndex == 1 ? options.splice(1) : null
    verticalIndex == 1 ? options.splice(2) : null

    const randomDirection = options[Math.floor(Math.random() * options.length)];
    console.log(randomDirection)
    directions.push(randomDirection);
    randomDirection == 'right' ? horizontalIndex += 1 : null
    randomDirection == 'left' ? horizontalIndex -= 1 : null
    randomDirection == 'up' ? verticalIndex -= 1 : null
    randomDirection == 'down' ? verticalIndex += 1 : null

    document.getElementById("cell_" + verticalIndex + "_" + horizontalIndex).style.backgroundColor = '#f00000';
    addDirections(len + 1, horizontalIndex, verticalIndex)
}
addDirections(0, 1, 1)
console.log(directions)
*/
document.getElementById('cell_1_1').style.backgroundColor = '#f00000'
function markDirections(directionNum, horizontalIndex, verticalIndex) {
    if (directionNum >= directions.length) return 0

    const direction = directions[directionNum];

    document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderBottom = '1.5px solid white';
    document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderRight = '1.5px solid white';

    direction == 'right' ? horizontalIndex += 1 : null
    direction == 'left' ? horizontalIndex -= 1 : null
    direction == 'up' ? verticalIndex -= 1 : null
    direction == 'down' ? verticalIndex += 1 : null

    if (directionNum == directions.length - 1) document.getElementById("cell_" + verticalIndex + "_" + horizontalIndex).style.backgroundColor = '#34eb5e';
    else {
        //document.getElementById("cell_" + verticalIndex + "_" + horizontalIndex).style.backgroundColor = '#34eb5e';
    }


    markDirections(directionNum + 1, horizontalIndex, verticalIndex)
}
markDirections(0, 1, 1);
function createWrongPaths(len) {
    if (len == 2 * mazeWidth) return 0

    const verticalIndex = Math.floor(Math.random() * mazeWidth);
    const horizontalIndex = Math.floor(Math.random() * mazeWidth);
    verticalIndex > 0 && horizontalIndex > 0 ?
        (document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderBottom = '1.5px solid white',
            document.getElementById('cell_' + verticalIndex + '_' + horizontalIndex).style.borderRight = '1.5px solid white') : null
    createWrongPaths(len + 1)
}
createWrongPaths(0)