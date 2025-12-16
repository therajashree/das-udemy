class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    dfsRecursive(start) {
        const reuslt = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            reuslt.push(vertex);
            visited[vertex] = true;

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    dfs(neighbor);
                }
            });

        })(start);

        return reuslt;

    }

}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph);

console.log(graph.dfsRecursive("A")) // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

// node dfs_recursive.js