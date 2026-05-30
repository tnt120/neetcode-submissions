class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        const nextNode = node.next;
        const prevNode = node.prev;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    _insertAtTop(node) {
        const firstRealNode = this.head.next;

        this.head.next = node;
        node.next = firstRealNode;
        node.prev = this.head;

        firstRealNode.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this._remove(node);
        this._insertAtTop(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }

        const newNode = new Node(key, value);
        this._insertAtTop(newNode);
        this.map.set(key, newNode);

        if (this.map.size > this.capacity) {
            const lruNode = this.tail.prev;
            this._remove(lruNode);
            this.map.delete(lruNode.key);
        }
    }
}
