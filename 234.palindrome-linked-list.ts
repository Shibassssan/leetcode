/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const isPalindrome = (head: ListNode | null): boolean => {
  if (!head) return false;
  const stack: number[] = [];
  const stackBackward: number[] = [];
  const reverse = (head: ListNode | null) => {
    if (!head) return;
    stack.push(head.val);
    reverse(head.next);
    stackBackward.push(head.val);
  };
  reverse(head);
  return stack.every((num, index) => stackBackward[index] === num);
};
// @lc code=end

