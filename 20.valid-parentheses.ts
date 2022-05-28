/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const brackets: { [key: string]: string } = {
  ']': '[',
  '}': '{',
  ')': '(',
};

const isClosing = (s: string): boolean => {
  return brackets.hasOwnProperty(s);
};

const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const chars = s.split('');

  for (const char of chars) {
    if (isClosing(char)) {
      const opening = stack.pop();
      if (brackets[char] !== opening) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
// @lc code=end

