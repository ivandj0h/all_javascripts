// In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.

/*
 *
 * Below is the basic way to create
 * Linked List using Object
 *
 */

// First Created Object Data
const dataOne = {
  data: 100,
};

const dataTwo = {
  data: 300,
};

const dataThree = {
  data: 400,
};

// Second is Create the Linked List
dataOne.next = dataTwo;
dataTwo.next = dataThree;

// Third is Print Out to the Console
//console.log(dataOne);

//===============================================//

/*
 *
 * Below is the basic way to create
 * Linked List Using Class
 *
 */

// First Created Class
// We call it Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Second is Instantiate
const n1 = new Node(100);

// Third is Printing Out to the Console
console.log(n1);
