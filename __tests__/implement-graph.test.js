'use strict';

const { Graph, Vertex, Edge } = require('../challenges/graph/implement-graph')

const newGraph = new Graph()

const zero = new Vertex(0);
const one = new Vertex(1)
const two = new Vertex(2)
const three = new Vertex(3)
const four = new Vertex(4)
const five = new Vertex(5)
const six = new Vertex(6)
const seven = new Vertex(7)

newGraph.addVertex(zero)
newGraph.addVertex(one)
newGraph.addVertex(two)
newGraph.addVertex(three)
newGraph.addVertex(four)
newGraph.addVertex(five)
newGraph.addVertex(six)
newGraph.addVertex(seven)

newGraph.addEdges(zero, two);
newGraph.addEdges(two, three);
newGraph.addEdges(two, four);
newGraph.addEdges(three, five);
newGraph.addEdges(four, five);
newGraph.addEdges(one, three);
newGraph.addEdges(one, six);
newGraph.addEdges(one, seven);


describe(' GRAPH Testing :: ', () => {
    it('1. “Happy Path” - Expected outcome  :):: ', () => {
    
        expect(newGraph.graphSize()).toEqual(8);

        const expected = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 } ]
        expect(newGraph.getAllVertex()).toEqual(expected);
        // console.log(newGraph.getNeighbors(two));
      
        console.log(newGraph.breadthFirst(one));
        
        expect(newGraph.getNeighbors(five).length).toEqual(0);
        expect(newGraph.getNeighbors(two).length).toEqual(2);
        expect(newGraph.getNeighbors(one).length).toEqual(3);
        
    })

    it('2. graph-breadth-first  :):: ', () => {
    
       
        let expected =   [
            { value: 1 },
            { value: 3 },
            { value: 6 },
            { value: 7 },
            { value: 5 }
        ]
   
        expect(newGraph.breadthFirst(one)).toEqual(expected);
      
        
    })
    
    it('3. “Expected failure”  :(:: ', () => {
        expect(newGraph.getNeighbors({value: 22})).toEqual('Does Not Exist');
        
    })
})