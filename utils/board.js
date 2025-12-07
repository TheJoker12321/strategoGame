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
    for (let i = 1; i < size; i++) {
        soliders.push(i)
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
        else {
            let temp = solidersList[idx1]
            solidersList[idx1] = solidersList[idx2]
            solidersList[idx2] = temp
            i++
        }
    } return solidersList
}

export function soldiersToBoard(board, soliders) {
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
    }
    return board;
}








// let soliders = shuffleSoliders(createSoliders(20))
// let board = createBoard()
// let fullboard = soldiersToBoard(board, soliders)
// console.log(fullboard);


