/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const convertNums = (nums: number[], start: number, end: number): TreeNode | null => {
  if (start > end) return null;

  const middle = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[middle]);

  root.left = convertNums(nums, start, middle - 1);
  root.right = convertNums(nums, middle + 1, end);
  return root;
}

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  const start = 0;
  const end = nums.length - 1;

  return convertNums(nums, start, end);
};
// @lc code=end

