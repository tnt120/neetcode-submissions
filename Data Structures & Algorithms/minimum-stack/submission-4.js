class MinStack {
    constructor() {
        this.stack = [];
        this.minValStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minValStack.length === 0 || this.minValStack[this.minValStack.length - 1] >= val) {
            this.minValStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const poped = this.stack.pop();

        if (this.minValStack[this.minValStack.length - 1] === poped) {
            this.minValStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValStack[this.minValStack.length - 1];
    }
}
