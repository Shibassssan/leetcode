/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//   }
// }

const reverseInt = (
  head: ListNode | null,
  newHead: ListNode | null
): ListNode | null => {
  if (head === null) return newHead;

  let next = head.next;
  head.next = newHead;
  return reverseInt(next, head);
};

const reverseList = (head: ListNode | null): ListNode | null => {
  if (typeof head === null) return null;
  return reverseInt(head, null);
};
// @lc code=end

