// Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
// The function should return an array containing all values of the nodes in the linked list.
function Node(val) {
    this.val = val;
    this.next = null;
}
// arrow functions will not work with jest
// const linkedListValues = (head) => {
//   const returnArr = [];
//   let current = head;
//   while(current){
//     returnArr.push(current.val);
//     current = current.next;
//   }
//   return returnArr;
// };

function linkedListValues(head){
  const returnArr = [];
  let current = head;
  while(current){
    returnArr.push(current.val);
    current = current.next;
  }
  console.log(returnArr)
  return returnArr;
}

module.exports = {
  linkedListValues, 
  Node
};