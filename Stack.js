// implement the pop functionality



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(this.first === null) return null
        if(this.first === this.last) this.last = null
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
