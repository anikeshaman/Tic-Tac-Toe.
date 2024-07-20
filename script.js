let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');

function makeMove(index) {
    if (!cells[index].textContent) {
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            reset();
        } else if (isBoardFull()) {
            alert("It's a draw!");
            reset();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function isBoardFull() {
    return Array.from(cells).every(cell => cell.textContent);
}

function reset() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
