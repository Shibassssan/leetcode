/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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
const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  const [first, second] =
    list1.val < list2.val ? [list1, list2] : [list2, list1];
  first.next = mergeTwoLists(first.next, second);

  return first;
};
// @lc code=end

