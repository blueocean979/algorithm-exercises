/**
Complete the following DoublyLinkedList
**/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
            this.length += 1
            return this;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
        this.length += 1
    }
    pop() {
        if (this.head === null) return
        const popped = this.tail;
        if (popped.prev === null) {
            this.head = null
            this.tail = null
        } else {
            this.tail = popped.prev
            this.tail.next = null
        }
        popped.next = null
        popped.prev = null
        this.length -= 1

    }
    shift() {
        if (this.head === null) return;
        if (this.head === this.tail) {
            this.tail = null
            this.head = null
        } else if (this.head.next !== null) {
            const shifted = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            shifted.next = null
        }
        this.length -= 1

    }
    unshift(val) {
        if (this.head === null) return
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
        this.length += 1
    }
    get(index) {
        if (this.length < 0 || index > this.length) return -1;
        let i = 1;
        let current = this.head
        while (i < index) {
            current = current.next;
            i++
        }
        return current
    }
    set(index, val) {
        if (this.length < 0 || index > this.length) return -1;
        let i = 1;
        let current = this.head
        while (i <= index) {
            if (i === index) current.val = val
            else current = current.next;
            i++
        }
        return current
    }
    insert(index, val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
            this.length += 1
            return this;
        }
        if (index > this.length) return -1;
        let i = 1;
        let current = this.head
        while (i <= index) {
            if (i === index) {
                newNode.prev = current.prev;
                newNode.next = current;
                current.prev = newNode;
                current = (current.prev).prev;
                if (current === null) this.head = newNode
                else { current.next = newNode; }
                this.length += 1
                break;
            }
            else current = current.next;
            i++
        }
    }
}

const linkedList = new DoublyLinkedList()
linkedList.push(3)
linkedList.push(5)
linkedList.push(8)
// linkedList.pop()
linkedList.unshift(12)
// const getByIndex = linkedList.get(5)
// console.log(getByIndex, 'getByIndex')
// linkedList.set(2, 28)
const insertRes = linkedList.insert(4, 17)
console.log(linkedList, insertRes)
