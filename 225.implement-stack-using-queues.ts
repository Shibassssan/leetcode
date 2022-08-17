/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */
// @lc code=start
class MyStack {
  stack: number[];
  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.pop() || 0;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

