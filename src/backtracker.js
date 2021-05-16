var Cell = function () {
    this.init = false;
    this.walls = 0x1111;
}
Cell.walls = {
    UP: 0x1000,
    DOWN: 0x0100,
    LEFT: 0x0010,
    RIGHT: 0x0001,
};
Cell.dummy = new Cell();
Cell.dummy.init = true;