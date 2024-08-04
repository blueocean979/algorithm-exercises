/**
Please implement the find and contains to the following Binary Search Tree
**/

/**
Please implement the find and contains to the following Binary Search Tree
**/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        // find the node based on the given value
        // return value should be the found node or undefined
        if (this.root === null) return undefined
        let current = this.root;
        while(current !== null){
            console.log(current, 'current')
            if(value === current.value ) return current
            else if (value > current.value) current = current.right
            else current = current.left
        }
        return undefined
    }
    contains(value){
        // return true or false if the contains the given value or not
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(32);
console.log(bst)

const findNodeRes = bst.find(32)
console.log(findNodeRes, 'findNodeRes' )