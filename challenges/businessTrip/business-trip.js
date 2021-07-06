'use strict';

const Graph = require('../graph/implement-graph');

function businessTrip(graph, arr) {
    let sum = 0 
    const neighbors = graph.neighbors(arr[0])
    let neighborsVal = neighbors.map(item => item.vertex.value)
    if(neighbors) {
        for (let i = 1; i < arr.length; i++) {
            if(neighborsVal[i-1] === arr[i]) {
            sum+= neighbors[i-1].size
            } else {
                return 'false, $0'
            }
        }
    }

    return `true, $${sum}` 
}

