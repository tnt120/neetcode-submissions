class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.min.length === 0 || this.min[this.min.length - 1] >= val) {
            this.min.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop();

        if (this.min[this.min.length - 1] === popped) {
            this.min.pop();
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
        return this.min[this.min.length - 1];
    }
}
