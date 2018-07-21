const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(towers = [[1,2,3], [], []]) {
    this.towers = towers;
    this.plates = towers[0].length;
  }

  promptMove(callback) {
    this.print();
    reader.question("From tower which, you choose?: ", function(startIdx) {
      reader.question("To tower which, you move?: ", function(endIdx) {
        callback(startIdx, endIdx);
      });
    });
  }

  isValidMove(startIdx, endIdx) {
    if (startIdx < 0 || startIdx > 2) return false;
    if (endIdx < 0 || endIdx > 2) return false;
    if (this.towers[startIdx].length === 0) return false;
    if (this.towers[startIdx][0] > this.towers[endIdx][0]) return false;
    return true;
  }

  move(startIdx, endIdx) {
    if (this.isValidMove(startIdx, endIdx)) {
      this.towers[endIdx].unshift(this.towers[startIdx].shift());
      return true;
    }
    return false;
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    return (this.towers[1].length === this.plates || this.towers[2].length === this.plates);
  }

  run(completionCallback) {
    this.promptMove((startIdx, endIdx) => {
      if (!this.move(startIdx, endIdx)) {
        console.log("Do or do not, there is no try.");
        this.run(completionCallback);
      } else {
        if (this.isWon()) {
          console.log("Proud of you, I am.");
          completionCallback();
        } else {
          this.run(completionCallback);
        }
      }
    });
  }
}

let game = new Game();
game.run(function() {
  console.log("There is cake");
  reader.close();
});
