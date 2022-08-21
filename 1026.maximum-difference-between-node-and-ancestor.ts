/*
 * @lc app=leetcode id=1026 lang=typescript
 *
 * [1026] Maximum Difference Between Node and Ancestor
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

const calcDiff = (root: TreeNode | null, max: number, min: number) => {
  if (!root) return 0;
  const newMax = Math.max(max, root.val);
  const newMin = Math.min(min, root.val);

  const left = calcDiff(root.left, newMax, newMin);
  const right = calcDiff(root.right, newMax, newMin);

  return Math.max(newMax - newMin, left, right);
}

const maxAncestorDiff = (root: TreeNode | null): number => {
  if (!root) return 0;
  return calcDiff(root, root.val, root.val)
};
// @lc code=end

