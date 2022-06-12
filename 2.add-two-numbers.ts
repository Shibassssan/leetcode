/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

const getCurrentValue = (node: ListNode | null) => {
  return node?.val || 0;
}

const getNextValue = (node: ListNode | null) => {
  return node?.next || null;
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carryNumber = 0): ListNode | null {
  if (!l1 && !l2) {
    return carryNumber === 0 ? null : new ListNode(carryNumber);
  }

  const nextl1 = getNextValue(l1);
  const nextl2 = getNextValue(l2);

  const currentSumValue = (getCurrentValue(l1) + getCurrentValue(l2) + carryNumber);

  const parseCurrentSumValue = currentSumValue % 10;

  const nextCarryNumber = Math.floor(currentSumValue / 10);

  return new ListNode(
    parseCurrentSumValue,
    addTwoNumbers(nextl1, nextl2, nextCarryNumber)
  );
};
// @lc code=end

