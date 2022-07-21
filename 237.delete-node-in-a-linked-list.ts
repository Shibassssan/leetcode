/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

/**
 Do not return anything, modify it in-place instead.
 */
const deleteNode = (root: ListNode | null): void => {
  if (!root) return;

  root.val = root.next?.val || 0;
  root.next = root.next?.next || null;
};
// @lc code=end

