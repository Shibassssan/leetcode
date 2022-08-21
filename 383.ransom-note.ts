/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
const canConstruct = (ransomNote: string, magazine: string): boolean => {
  if (ransomNote.length > magazine.length) return false;
  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote.substring(i, i + 1);
    if (magazine.indexOf(letter) === -1) return false;
    magazine = magazine.replace(letter, '');
  }
  return true;
};
// @lc code=end

