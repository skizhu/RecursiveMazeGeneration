var mazeWidth = 3;
var mazeHeight = mazeWidth;
var rowIndex, colIndex;

var exits = [];

for (exit = 1; exit <= mazeWidth - 1; exit++) {

    exits.push("right");
    exits.push("bottom");

}

var currentCell;

var rowIndex = 1;
var colIndex = 1;

var table = document.createElement("table");
var tbody = document.createElement("tbody");

for (rowIndex = 1; rowIndex <= mazeHeight; rowIndex++) {

    var row = document.createElement("tr");

    for (colIndex = 1; colIndex <= mazeWidth; colIndex++) {

        var col = document.createElement("td");
        if (rowIndex == 1 && colIndex == 1) {

            //col.style.backgroundColor = "rgb(244,0,0)";
            col.setAttribute("type", "start");

        } else if (rowIndex == mazeHeight && colIndex == mazeWidth) {

            //col.style.backgroundColor = "rgb(0,244,0)";
            col.setAttribute("type", "finish");

        } else {

            col.style.backgroundColor = "rgb(255,255,255)";

        }
        col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);

        row.appendChild(col);

    }

    tbody.appendChild(row);

}

table.appendChild(tbody);

document.getElementById("maze_container").appendChild(table);

/*for (exitIndex = 0; exitIndex < exits.length; exitIndex++) {

    switch (exits[exitIndex]) {

        case "right":

            colIndex = colIndex + 1;
            break;

        case "bottom":

            rowIndex = rowIndex + 1;
            break;

    }

    currentCell = document.getElementById("cell_" + rowIndex + "_" + colIndex);

    //currentCell.style.backgroundColor = "#f00000";



}*/

