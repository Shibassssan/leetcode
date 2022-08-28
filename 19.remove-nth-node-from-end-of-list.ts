/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  if (head === null || head.next === null) return null;
  let temp = head;
  let cur = head;
  let delay = n;
  while (cur !== null) {
    if (delay < 0) {
      temp = temp.next;
    }
    cur = cur.next;
    delay--;
  }
  if (delay < 0) {
    temp.next = temp.next?.next;
    return head;
  }

  return head.next;
};
// @lc code=end

