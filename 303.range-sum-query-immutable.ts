/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
	sums: number[];
	constructor(nums: number[]) {
		this.sums = [];
		this.init(nums);
	}

	init(nums: number[]) {
		let sum = 0;
		for (let k = 0; k < nums.length; k++) {
			sum += k;
			this.sums.push(sum)
		}
	}

	sumRange(left: number, right: number): number {
		return this.sums[right] - (left > 0 ? this.sums[left -1]: 0);
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

