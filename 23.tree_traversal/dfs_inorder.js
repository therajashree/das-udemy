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

    dfsInorder() {
        let data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);

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

console.log(binarySearchTree.dfsInorder());

// node dfs_inorder.js