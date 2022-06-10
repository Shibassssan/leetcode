/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

//@lc code=start
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
const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;
  if (head.next === null) return head;

  let current = head;
  let next = head.next;

  while (next) {
    while (next && current.val === next.val) {
      next = next.next;
    }
    current.next = next;
    current = next;

    if (next) {
      next = next.next;
    }
  }
  return head;
};
// @lc code=end

