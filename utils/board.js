import {movement} from "./logicGame.js"

export function createBoard(size = 10) {
    let board = []
    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
            row.push("-")
        }
        board.push(row)
    }
    return board
}

export function createSoliders(size = 10) {
    let soliders = ["flag"]
    if (size == 1) {
        soliders = [1]
    }
    else {
        for (let i = 1; i < size; i++) {
            soliders.push(i)
        }
    }
    return soliders
}

export function shuffleSoliders(solidersList) {
    let swaps = 100
    for (let i = 0; i < swaps;) {
        let idx1 = Math.floor(Math.random() * solidersList.length)
        let idx2 = Math.floor(Math.random() * solidersList.length)
        if (idx1 == idx2) {
            continue
        }
        let temp = solidersList[idx1]
        solidersList[idx1] = solidersList[idx2]
        solidersList[idx2] = temp
        i++
    } return solidersList
}

export function soldiersToBoardP1(board, soliders) {
    let row = 0
    let col = 0
    while (soliders.length !== 0) {
        let solider = soliders.pop()
        board[row][col] = solider
        col++
        if (col === board[0].length) {
            col = 0
            row++
        }
        else if (row > board.length && soliders.length > 0) {
            return `invalid input`
        }
    }
    return board;
}

export function soldiersToBoardP2(board, soliders) {
    let row = board.length - 1
    let col = board.length - 1
    while (soliders.length !== 0) {
        let solider = soliders.pop()
        board[row][col] = solider
        col--
        if (col < 0) {
            col = board.length - 1
            row--
        }
    }
    return board;
}





let soliders = shuffleSoliders(createSoliders(10))
let soliders2 = createSoliders(1)
console.log(soliders2);

let board = createBoard()
soldiersToBoardP1(board, soliders)
soldiersToBoardP2(board, soliders2)
console.table(board);
console.table(movement(9, 9, board))





