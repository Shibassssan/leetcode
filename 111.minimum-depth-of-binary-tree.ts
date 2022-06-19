/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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
// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//   }
// }

const calcDepth = (root: TreeNode, currentDepth: number): number => {
  if (!root?.left && !root?.right) {
    return currentDepth;
  }
  const left = root.left ? calcDepth(root.left, currentDepth + 1) : Number.MAX_SAFE_INTEGER;
  const right = root.right ? calcDepth(root.right, currentDepth + 1) : Number.MAX_SAFE_INTEGER;
  return Math.min(left, right);
};

const minDepth = (root: TreeNode | null): number => {
  if (root === null) return 0;
  const minimumDepth = calcDepth(root, 1);
  return minimumDepth;
};
// @lc code=end

