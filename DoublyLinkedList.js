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
            return this;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
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
    }
    shift() {
        if (this.head === null) return;
        if ( this.head === this.tail){
            this.tail = null
            this.head = null
        } else if (this.head.next !== null){
            const shifted = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            shifted.next = null
        }

    }
    unshift(val) {
        if (this.head === null) return
        const newNode = new Node(val);
        newNode.next = head;
        this.head.prev = newNode;
        this.head = newNode
    }
    get(index) {
        
    }
    set(index, val) {
        // code here
    }
    insert(index, val) {
        // code here
    }
}

const linkedList = new DoublyLinkedList()
linkedList.push(3)
linkedList.push(5)
linkedList.push(8)
linkedList.pop()
linkedList.unshift(12)

console.log(linkedList)
