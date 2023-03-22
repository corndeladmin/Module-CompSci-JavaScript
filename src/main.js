function main() {
    const initialBoard = [
        [0, 0, 0, 0, 0, 2, 1, 0, 0],
        [0, 0, 4, 0, 0, 8, 7, 0, 0],
        [0, 2, 0, 3, 0, 0, 9, 0, 0],
        [6, 0, 2, 0, 0, 3, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 5, 0, 6, 0, 0, 3, 0, 1],
        [0, 0, 3, 0, 0, 5, 0, 8, 0],
        [0, 0, 8, 2, 0, 0, 5, 0, 0],
        [0, 0, 9, 7, 0, 0, 0, 0, 0]
    ];

    console.log("Solving board:");
    printBoard(initialBoard);

    const stack = [initialBoard];

    while (stack.length > 0) {
        const board = stack.pop();
        const slot = getEmptySlot(board);

        if (!slot) {
            console.log("Solved!");
            printBoard(board);
            return;
        }

        for (let guess = 1; guess <= 9; guess++) {
            if (isValidInSlot(board, slot, guess)) {
                stack.push(updateBoard(board, slot, guess));
            }
        }
    }
}

function getEmptySlot(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col <= 9; col++) {
            if (board[row][col] === 0) {
                return {row, col};
            }
        }
    }
}

function isValidInSlot(board, slot, guess) {
    return isValidInRow(board, guess, slot.row) &&
        isValidInColumn(board, guess, slot.col) &&
        isValidInSquare(board, slot, guess);
}

function isValidInRow(board, guess, row) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === guess) {
            return false;
        }
    }

    return true;
}

function isValidInColumn(board, guess, col) {
    for (let row = 0; row < 9; row++) {
        if (board[row][col] === guess) {
            return false;
        }
    }

    return true;
}

function isValidInSquare(board, slot, guess) {
    const squareX = Math.floor(slot.row / 3);
    const squareY = Math.floor(slot.col / 3);

    for (let row = squareX * 3; row < (squareX + 1) * 3; row++) {
        for (let col = squareY * 3; col < (squareY + 1) * 3; col++) {
            if (board[row][col] === guess) {
                return false;
            }
        }
    }

    return true;
}

function updateBoard(board, slot, guess) {
    const newBoard = [];

    for (let row = 0; row < 9; row++) {
        newBoard[row] = [...board[row]];
    }

    newBoard[slot.row][slot.col] = guess;

    return newBoard;
}

function printRowLine() {
    let toPrint = "-";
    for (let i = 1; i <= 9; i++) {
        toPrint += "--";
    }
    console.log(toPrint);
}

function printBoard(board) {
    printRowLine();

    for (const row of board) {
        let rowString = "|";
        for (const cell of row) {
            if (cell === 0) {
                rowString += " |";
            } else {
                rowString += `${cell}|`;
            }
        }

        console.log(rowString);
        printRowLine();
    }
}

main();