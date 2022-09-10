/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
const helper = (
  i: number,
  j: number,
  c: number,
  board: string[][],
  word: string
): boolean => {
  if (c == word.length) return true;
  if (
    i < 0 ||
    i > board.length - 1 ||
    j < 0 ||
    j > board[i].length - 1 ||
    board[i][j] !== word[c] ||
    board[i][j] == "#"
  ) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = "#";
  const result = (() => {
    return (
      helper(i - 1, j, c + 1, board, word) ||
      helper(i + 1, j, c + 1, board, word) ||
      helper(i, j - 1, c + 1, board, word) ||
      helper(i, j + 1, c + 1, board, word)
    );
  })();

  board[i][j] = temp;
  return result;
};

const exist = (board: string[][], word: string): boolean => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (helper(i, j, 0, board, word)) return true;
    }
  }
  return false;
};

// @lc code=end
