/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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
const inorderTraversal = (root: TreeNode | null): number[] =>  {
  if (!root) return [];
  const right = inorderTraversal(root.right);
  const left = inorderTraversal(root.left);
  return [...left, root.val, ...right];
};
// @lc code=end

