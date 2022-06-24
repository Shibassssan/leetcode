/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
const isPalindrome = (s: string): boolean => {
  if (s === ' ') return true;

  const target = s
    .trim()
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '');
  const revereTarget = target.split('').reverse().join('');
  return target === revereTarget;
};
// @lc code=end

