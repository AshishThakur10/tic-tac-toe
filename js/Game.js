export default class Game {
    constructor() {
        console.log("init game")
        this.turn = "X";
        this.board = new Array(9).fill(null)


    }
    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";

        } else {
            this.turn = "X"
        }
    }
    makeMove(i) {
        tis.board(i) = this.turn;
    }

}



