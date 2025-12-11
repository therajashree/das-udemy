// Binary Search Tree - DFS Exercise
// Implement the following functions on the BinarySearchTree class. 
// insert has been implemented for you to help with testing.

// DFSPreOrder

// This function should search through each node in the binary search tree 
// using pre-order depth first search and return an array containing each node's value.

class Node {
    constructor(val) {
        this.val  = val;
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
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if (val > current.val) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    DFSPreOrder() {
        let data = [];

        function traverse(node) {
            if(!node) return;

            data.push(node.val);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
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

console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]


// DFSInOrder

// This function should search through each node in the binary search tree using 
// in-order depth first search and return an array containing each node's value.

console.log(binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50]


// DFSPostOrder

// This function should search through each node in the binary search tree 
// using post-order depth first search and return an array containing each node's value.

console.log(binarySearchTree.DFSPostOrder()); // [5, 1, 12, 10, 50, 20, 15]

// node 2.dfs_exercise.js