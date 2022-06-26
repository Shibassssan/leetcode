/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

const postorderTraversal = (root: TreeNode | null): number[] => {
  if (root === null) return [];

  const result = [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];

  return result;
};
// @lc code=end

