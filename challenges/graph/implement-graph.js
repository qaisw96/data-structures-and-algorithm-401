'use strict';

class Vertex {
    constructor(value) {
        this.value = value
    }

}

class Edge {
    constructor(vertex, size) {
        this.vertex = vertex
        this.size = size
    }
}


class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addVertex(vertex) {
        if(!vertex) return 
        this.adjacencyList.set(vertex, [])
        return vertex
    }

    addEdges(start, end, size) {
        const newEdge = new Edge(end, size)
        this.adjacencyList.get(start).push(newEdge)
    }

    getAllVertex() {
        const list = []
        for (const [v,e] of this.adjacencyList.entries()) {
            list.push(v)
        }
        return list
    }

    getNeighbors(vertex) {
        if(!this.adjacencyList.has(vertex)) return 'Does Not Exist'
        return this.adjacencyList.get(vertex)
    }

    graphSize() {
       return this.getAllVertex().length
    }

}

module.exports = {
    Graph,
    Vertex,
    Edge
}



