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

let board = createBoard(3)
console.log(board);
