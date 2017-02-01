class TicTacToe {
    constructor() {
      this.playerX = "x";
      this.playerO = "o";
      this.curPlayer = this.playerX;
      this.board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
      this.index = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8] ];
      this.win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
    }

    getCurrentPlayerSymbol() {
      return this.curPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (rowIndex === 0) {
        for (var i = 0; i <= this.index[0].length - 1; i ++) {
          if (i === columnIndex) {
            if (this.board[this.index[0][i]] === "E") {
              this.board[this.index[0][i]] = this.curPlayer;
              for (var k = 0; k < this.win.length; k ++) {
                for (var g = 0; g < this.win[k].length; g ++) {
                  if (this.win[k][g] === this.index[0][i])
                  this.win[k][g] = this.curPlayer;
                }
              }
              this.curPlayer = this.curPlayer === "x" ? "o" : "x";
            } else {
              return this.curPlayer;
            }
          }
        }
      } else if (rowIndex === 1) {
        for (var i = 0; i <= this.index[1].length - 1; i ++) {
          if (i === columnIndex) {
            if (this.board[this.index[1][i]] === "E") {
              this.board[this.index[1][i]] = this.curPlayer;
              for (var k = 0; k < this.win.length; k ++) {
                for (var g = 0; g < this.win[k].length; g ++) {
                  if (this.win[k][g] === this.index[1][i])
                  this.win[k][g] = this.curPlayer;
                }
              }
              this.curPlayer = this.curPlayer === "x" ? "o" : "x";
            } else {
              return this.curPlayer;
            }
          }
        }
      } else if (rowIndex === 2) {
        for (var i = 0; i <= this.index[2].length - 1; i ++) {
          if (i === columnIndex) {
            if (this.board[this.index[2][i]] === "E") {
              this.board[this.index[2][i]] = this.curPlayer;
              for (var k = 0; k < this.win.length; k ++) {
                for (var g = 0; g < this.win[k].length; g ++) {
                  if (this.win[k][g] === this.index[2][i])
                  this.win[k][g] = this.curPlayer;
                }
              }
              this.curPlayer = this.curPlayer === "x" ? "o" : "x";
            } else {
              return this.curPlayer;
            }
          }
        }
      }
    }

    isFinished() {
      if (this.getWinner() !== null || this.noMoreTurns() !== false) {
        return true;
      }
      return false;
    }



    getWinner() {
      for (var i = 0; i < this.win.length; i ++) {
        for (var j = 0; j < this.win[i].length; j ++) {
          if (this.win[i][j] === this.win[i][j + 1] && this.win[i][j] === this.win[i][j + 2]) {
            return this.win[i][j];
          }
        }
      }
       return null;
    }

    noMoreTurns() {
      for (var i = 0; i < this.board.length; i ++) {
        if (this.board[i] === "E") {
          return false;
        }
      }
      return true;
    }

    isDraw() {
      if ((this.getWinner() === null) && (this.noMoreTurns() === true)) {
        return true;
      }
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      if (rowIndex === 0) {
        for (var i = 0; i <= this.index[0].length - 1; i ++) {
          if (i === colIndex) {
            if (this.board[this.index[0][i]] === "x") {
              return this.board[this.index[0][i]];
            } else if (this.board[this.index[0][i]] === "o") {
              return this.board[this.index[0][i]];
            } else if (this.board[this.index[0][i]] === "E") {
              return null;
            }
          }
        }
      } else if (rowIndex === 1) {
        for (var i = 0; i <= this.index[1].length - 1; i ++) {
          if (i === colIndex) {
            if (this.board[this.index[1][i]] === "x") {
              return this.board[this.index[1][i]];
            } else if (this.board[this.index[1][i]] === "o") {
              return this.board[this.index[1][i]];
            } else if (this.board[this.index[1][i]] === "E") {
              return null;
            }
          }
        }
      } else if (rowIndex === 2) {
        for (var i = 0; i <= this.index[2].length - 1; i ++) {
          if (i === colIndex) {
            if (this.board[this.index[2][i]] === "x") {
              return this.board[this.index[2][i]];
            } else if (this.board[this.index[2][i]] === "o") {
              return this.board[this.index[2][i]];
            } else if (this.board[this.index[2][i]] === "E") {
              return null;
            }
          }
        }
      }
    }
}

module.exports = TicTacToe;
