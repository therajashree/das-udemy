// Binary Search Tree - BFS Exercise
// Implement the following function on the BinarySearchTree class. insert is implemented to help with testing.

// breadthFirstSearch

// This function should search through each node in the binary search tree using breadth first search 
// and return an array containing each node's value.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while(true) {
            if (val < current.val) {
                if(current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            if (val > current.val) {
                if(current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    breadthFirstSearch() {
        let node;
        let queue = [];
        let data = [];

        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            data.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);

console.log(binarySearchTree.breadthFirstSearch()) // [(15, 10, 20, 1, 12, 50, 5)];

// node 1.bfs_exercise.js
