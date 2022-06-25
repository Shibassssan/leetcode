/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

const hasCycle = (head: ListNode | null): boolean => {
  if (head === null || head.next === null) return false;

  let currentHead = head;
  const MAX_NUMBER = 10 ** 4;
  for (let i = 0; i <= MAX_NUMBER; i++){
    if (!currentHead) {
      return false;
    }
    currentHead = currentHead.next;
  }
  return true;
};
// @lc code=end

