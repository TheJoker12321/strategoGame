import { movement } from "./logicGame.js"

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

export function createSoliders(symbole, size = 10) {
    let soliders = [{ symbole: symbole, value: "flag" }]
    if (size == 1) {
        soliders = { symbole: symbole, value: 1 }
    }
    else {
        for (let i = 1; i < size; i++) {
            soliders.push({ symbole: symbole, value: i })
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




function printBoard(board) {
    let new_board = []
    for (let row of board) {
        let l = []
        for (let col of row) {
            if (typeof col != "object") {
                l.push(col)
            }
            else { l.push(col.symbole) }
        }
        new_board.push(l)
    } console.table(new_board)
}



let board = createBoard()
let soliders1 = createSoliders("O")
// console.log(soliders1);
soldiersToBoardP1(board, soliders1)
// printBoard(board)lllll


// let soliders = shuffleSoliders(createSoliders(10))
let soliders2 = createSoliders("X")
// console.log(soliders2);

// let board = createBoard()
// soldiersToBoardP1(board, soliders)
soldiersToBoardP2(board, soliders2)
console.log(board);
// printBoard(board)
// console.table(movement(9, 9, board))
// console.log(board);

printBoard(board)



