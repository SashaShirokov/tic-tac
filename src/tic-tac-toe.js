class TicTacToe {
    constructor() {
      this.playerX = "x";
      this.playerO = "o";
      this.curPlayer = this.playerX;
      this.board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
      this.index = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8] ];
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
              this.curPlayer = this.curPlayer === "x" ? "o" : "x";
            } else {
              return this.curPlayer;
            }
          }
        }
      }
    }

    isFinished() {

    }

    getWinner() {
      for (var i = 0; i <= 6; i = i + 3) {
        if (this.board[i] !== "E" && this.board[i] === this.board[i + 1] && this.board[i + 1] === this.board[i + 2]) {
          return this.board[i];
        }
      }

      for (var i = 0; i <= 2; i ++) {
        if (this.board[i] !== "E" && this.board[i] === this.board[i + 3] && this.board[i + 3] === this.board[i + 6]) {
          return this.board[i];
        }
      }

      for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
        if (this.board[i] !== "E" && this.board[i] === this.board[i + j] && this.board[i + j] === this.board[i + 2 * j]) {
          return this.board[i];
        }
      }
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
            return false;
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
            return false;
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
            return false;
          }
        }
      }
    }
}

module.exports = TicTacToe;
