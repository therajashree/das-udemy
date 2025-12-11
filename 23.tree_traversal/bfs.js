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
        let node  = new Node(val);

        if (this.root === null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while(true) {
            if(val === current.val) return undefined;

            if (val < current.val) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if(val > current.val) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    bfs() {
        let node = this.root;
        let data = [];
        let queue = [];
       
        queue.push(this.root);

        while(queue.length) {
            node = queue.shift();
            data.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(10)
    .insert(6)
    .insert(15)
    .insert(3)
    .insert(8)
    .insert(20);

console.log(binarySearchTree.bfs());

// node bfs.js