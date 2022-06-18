/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const calcBalanced = (root: TreeNode | null): number => {
  if (root === null) return 0;
  return 1 + Math.max(calcBalanced(root.left), calcBalanced(root.right));
}
const isBalanced = (root: TreeNode | null): boolean =>  {
  if (root === null) return false;
  const left = calcBalanced(root.left);
  const right = calcBalanced(root.right);
  return Math.abs(left - right) <= 1 && isBalanced(root.right) && isBalanced(root.left);
};
// @lc code=end

