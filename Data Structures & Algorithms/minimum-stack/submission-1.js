class MinStack {
    stack;
    minValues;

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

        if (this.minValues.length === 0 || val <= this.minValues[this.minValues.length - 1]) {
            this.minValues.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();

        if (this.minValues[this.minValues.length - 1] === val) {
            this.minValues.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length- 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValues[this.minValues.length - 1];
    }
}
