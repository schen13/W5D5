class Board {
  constructor(grid= [new Array(3), new Array(3), new Array(3)]) {
    this.grid = grid;
    this.player1 = 'O';
    this.player2 = 'X';
  }

  won(player) {
    return this.checkRows(player) || this.checkCols(player) || this.checkDiag(player);
  }

  checkRows(player) {
    result = false;
    let checker = function(el) {
      return el === player;
    };
    for (let i = 0; i < this.grid.length; i++) {
      result = result || this.grid[i].every(checker);
    }
    return result;
  }

  winner() {

  }

  empty(x, y) {
    return this.grid[x][y] === undefined;
  }

  placeMark(x, y, mark) {
    if (this.empty(x, y)) {
      this.grid[x][y] = mark;
    } else {
      console.log("Try again son");
    }
  }

  render() {
    console.log(JSON.stringify(this.grid));
  }
}
