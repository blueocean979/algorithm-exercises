/**
  Please add dequeue function to the following Queue 
**/



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(this.size === 0) return null
        const dequeued = this.first
        this.first = this.first.next
        dequeued.next = null
        return dequeued
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)
const dequeueRes = queue.dequeue()
console.log(dequeueRes, 'dequeueRes')
console.log(queue)
