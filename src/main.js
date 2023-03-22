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
    throw new Error("Fill Me In!");
    return {row: 0, col: 0};
}

function isValidInSlot(board, slot, guess) {
    return isValidInRow(board, guess, slot.row) &&
        isValidInColumn(board, guess, slot.col) &&
        isValidInSquare(board, slot, guess);
}

function isValidInRow(board, guess, row) {
    throw new Error("Fill Me In!");
    return true;
}

function isValidInColumn(board, slot, col) {
    throw new Error("Fill Me In!");
    return true;
}

function isValidInSquare(board, slot, guess) {
    throw new Error("Fill Me In!");
    return true;
}

function updateBoard(board, slot, guess) {
    throw new Error("Fill Me In!");
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