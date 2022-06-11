/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }
// }

const isMirror = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if (p.val !== q.val) return false;
  return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}

const isSymmetric = (root: TreeNode | null): boolean => {
  if (root === null) return false;

  return isMirror(root.right, root.left);
};
// @lc code=end

