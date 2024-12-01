function validSolution(board) {
  function isValidBoard(board) {
    if (board.length !== 9) return false;
    for (let row of board) {
      if (row.length !== 9) return false;
      if (!row.every((num) => Number.isInteger(num) && num >= 0 && num <= 9)) {
        return false;
      }
    }
    return true;
  }

  if (!isValidBoard(board)) {
    console.error("Дошка має бути 9x9 і містити числа від 1 до 9.");
    return false;
  }

  function isValidRow(row) {
    return (
      row
        .slice()
        .sort((a, b) => a - b)
        .join("") === "123456789"
    );
  }

  for (let row of board) {
    if (!isValidRow(row)) return false;
  }

  for (let col = 0; col < 9; col++) {
    let column = board.map((row) => row[col]);
    if (!isValidRow(column)) return false;
  }

  for (let blockRow = 0; blockRow < 3; blockRow++) {
    for (let blockCol = 0; blockCol < 3; blockCol++) {
      let block = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          block.push(board[blockRow * 3 + i][blockCol * 3 + j]);
        }
      }
      if (!isValidRow(block)) return false;
    }
  }

  return true;
}

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const result = validSolution(board);
console.log(result);
