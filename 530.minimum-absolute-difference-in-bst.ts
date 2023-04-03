/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }

const getMinimumDifference = (root: TreeNode | null): number => {
  let res = Number.MAX_SAFE_INTEGER;
  let prev: number | undefined = undefined;

  const getMinNumber = (node: TreeNode | null) => {
    if (!node) return;

    getMinNumber(node.left);
    if (typeof prev !== 'undefined') {
      res = Math.min(res, Math.abs(node.val - prev));
    }
    prev = node.val;

    getMinNumber(node.right);
  };

  getMinNumber(root);

  return res;
};
// @lc code=end

