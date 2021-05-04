'use strict';

// Require our linked list implementation
const BinarySearch  = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe('BINARY SEARCH ARRAY', () => {
  it('return an array with the new value added at the middle index', () => {
    expect(BinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(BinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  })

});
