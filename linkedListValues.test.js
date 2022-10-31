const { linkedListValues, Node } = require('./linkedListValues');
// this test is not passing
// check length of output and type of output?
test('returns empty array when linked list head is null', () => {
  expect(linkedListValues(null).toEqual([]));
})

test('returns an array with all elements when linked list has one node', () => {
  const aNode = new Node('a');
  expect(linkedListValues(aNode)).toEqual(['a']);
});

test('returns an array with all elements', () => {
  const aNode = new Node('a');
  const bNode = new Node('b');
  const cNode = new Node('c');
  const dNode = new Node('d');
  aNode.next = bNode;
  bNode.next = cNode;
  cNode.next = dNode;
  expect(linkedListValues(aNode)).toEqual(['a','b','c','d']);
});