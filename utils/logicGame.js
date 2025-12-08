import { createBoard } from "./board.js"
import readline from 'readline-sync'
function canMove(row, col, board) {
    let canMove = []
    if (row !== board.length - 1) {
        canMove.push("down")
    }
    if (row !== 0) {
        canMove.push("up")
    }
    if (col !== board[0].length - 1) {
        canMove.push("right")
    }
    if (col !== 0) {
        canMove.push("left")
    }
    return canMove
}
// const direction = ["left", "right", "up", "down"]




function movement(row, col, board) {
    let canMove1 = canMove(row, col, board)
    let move;
    while (true) {    
        console.log(`you can move in these direction: ${canMove1}`);
        move = readline.question("which way you want to move? ")
        if (!(canMove1.includes(move))) {
            console.log("you cant move in this way. try again");
            continue
        }
        break
    }
    if (move === "right") {
        board[row][col + 1] = board[row][col]
        board[row][col] = "-"
    } else if (move === "left") {
        board[row][col - 1] = board[row][col]
        board[row][col] = "-"
    } else if (move === "up") {
        board[row - 1][col] = board[row][col]
        board[row][col] = "-"
    } else {
        board[row + 1][col] = board[row][col]
        board[row][col] = "-"
    }
    return board
}
let x = createBoard(4)

export {movement}