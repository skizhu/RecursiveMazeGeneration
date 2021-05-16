var grid;

function generate(dimensions, numDoors) {
    grid = new Array();
    for (var i = 0; i < dimensions; i++) {
        grid[i] = new Array();

        for (var j = 0; j < dimensions; j++) {
            grid[i][j] = "";
        }
    }
    //creates a new array, grid, then based on the dimension of the grid, 
    //creates an according number of smaller lists
    //at first, each of these lists are set to ""

    addOuterWalls(); //iterates through the grid to find its outer limits, then sets
    //those areas as walls
    var ent = addEntrance(); //creates a variable for the maze's opening
    addInnerWalls(true, 1, grid.length - 2, 1, grid.length - 2, ent);
}

function addOuterWalls() {
    for (var i = 0; i < grid.length; i++) { //iterates through the entire grid
        if (i == 0 || i == (grid.length - 1)) { //if i is 0 or the last digit
            for (var j = 0; j < grid.length; j++) {
                grid[i][j] = "w"; //sets that item to a wall
            }
        } else {
            grid[i][0] = "w"; //sets outside sections as walls
            grid[i][grid.length - 1] = "w"; //sets outside sections as walls
        }
    }
}

function addEntrance() {
    var x = randomNumber(1, grid.length - 1); //gets a random item in the grid
    grid[grid.length - 1][x] = "g"; //sets grid at the outside wall to x as a gate
    return x;
}

function addInnerWalls(h, minX, maxX, minY, maxY, gate) {
    //h = true
    //minX = 1
    //maxX = grid.length - 2
    //minY = 1
    //maxY = grid.length - 2
    //gate = ent, ie. addEntrace()
    if (h) {

        if (maxX - minX < 2) {
            return; //checks whether max - min is at least 2 high
        }

        var y = Math.floor(randomNumber(minY, maxY) / 2) * 2;
        addHWall(minX, maxX, y);

        addInnerWalls(!h, minX, maxX, minY, y - 1, gate);
        addInnerWalls(!h, minX, maxX, y + 1, maxY, gate);
    } else {
        if (maxY - minY < 2) {
            return;
        }

        var x = Math.floor(randomNumber(minX, maxX) / 2) * 2;
        addVWall(minY, maxY, x);

        addInnerWalls(!h, minX, x - 1, minY, maxY, gate);
        addInnerWalls(!h, x + 1, maxX, minY, maxY, gate);
    }
}

function addHWall(minX, maxX, y) {
    var hole = Math.floor(randomNumber(minX, maxX) / 2) * 2 + 1;

    for (var i = minX; i <= maxX; i++) {
        if (i == hole) grid[y][i] = "";
        else grid[y][i] = "w";
    }
}

function addVWall(minY, maxY, x) {
    var hole = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;

    for (var i = minY; i <= maxY; i++) {
        if (i == hole) grid[i][x] = "";
        else grid[i][x] = "w";
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function display() {
    document.getElementById("cnt").innerHTML = "";

    for (var i = 0; i < grid.length; i++) { //grid is an array containing the maze
        var output = "<div>";
        for (var j = 0; j < grid.length; j++) {
            output += "<b " + grid[i][j] + "></b>"; //for each item in the grid, append it as a bolded section in the div
        }
        output += "</div>";
        document.getElementById("cnt").innerHTML += output;
    }
}
generate(31, 1, 1);
display(); //this function simply adds the maze to the document