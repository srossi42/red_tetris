export const checkLines = (board, endGame, newShapes) => {
    for (let y = 0; y < 23; y++) {
        let fullLines = true
        for (let x = 0; x < 10; x++) {
            if (board[y][x] < 10) {
                fullLines = false
            } else if (board[y][x] > 10 && y === 3) {
                endGame();
                return board
            }
        }
        if (fullLines) {
            board.splice(y, 1);
            board.splice(0,0,[0,0,0,0,0,0,0,0,0,0]);
            y--;
        }
    }
    newShapes()
    return board
}