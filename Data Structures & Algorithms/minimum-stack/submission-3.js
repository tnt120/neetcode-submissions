class MinStack {
    constructor() {
        this.stack = [];
        this.minValues = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minValues.length === 0 || this.minValues[this.minValues.length - 1] >= val) {
            this.minValues.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const poped = this.stack.pop();

        if (poped === this.minValues[this.minValues.length - 1]) {
            this.minValues.pop();
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
        return this.minValues[this.minValues.length - 1];
    }
}
