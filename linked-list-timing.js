const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let startTime, endTime;
let sll = new LinkedList();
let dll = new DoublyLinkedList();

let input1 = 10000;
let input2 = 100000;
let input3 = 1000000;
let input4 = 10000000;
//SLL ADDTOHEAD:
startTime = Date.now();
for (let i = 0; i < input1; i++){
    let val = i;
    sll.addToHead(val);
}
endTime = Date.now();
console.log(`single linked list time addtohead for ${input1} is: ${endTime - startTime} ms`);
//------------
sll = new LinkedList();
startTime = Date.now();
for (let i = 0; i < input2; i++) {
    let val = i;
    sll.addToHead(val);
}
endTime = Date.now();
console.log(`single linked list time addtohead for ${input2} is: ${endTime - startTime} ms`);
//----------------
//---------------
//SLL ADDTOTAIL
sll = new LinkedList();
startTime = Date.now();
for (let i = 0; i < input1; i++){
    let val = i;
    sll.addToTail(val);
}
endTime = Date.now();
console.log(`single linked list time addtotail for ${input1} is: ${endTime - startTime} ms`);
sll = new LinkedList();
startTime = Date.now();
for (let i = 0; i < input2; i++) {
    let val = i;
    sll.addToTail(val);
}
endTime = Date.now();
console.log(`single linked list time addtotail for ${input2} is: ${endTime - startTime} ms`);
//------------------
startTime = Date.now();

for (let i = 0; i < input1 ; i++){
    let val = i;
    dll.addToHead(val);
};
endTime = Date.now();
console.log(`double linked list time addtohead for ${input1} is: ${endTime - startTime} ms`);

dll = new DoublyLinkedList();
for (let i = 0; i < input2; i++) {
    let val = i;
    dll.addToHead(val);
};
endTime = Date.now();
console.log(`double linked list time addtohead for ${input2} is: ${endTime - startTime} ms`);


dll = new DoublyLinkedList();
for (let i = 0; i < input1; i++) {
    let val = i;
    dll.addToTail(val);
};
endTime = Date.now();
console.log(`double linked list time addtotail for ${input1} is: ${endTime - startTime} ms`);


dll = new DoublyLinkedList();
for (let i = 0; i < input2; i++) {
    let val = i;
    dll.addToTail(val);
};
endTime = Date.now();
console.log(`double linked list time addtotail for ${input2} is: ${endTime - startTime} ms`);
//-----------Results------------
// single linked list time addtohead for 10000 is: 10 ms
// single linked list time addtohead for 100000 is: 48 ms
// single linked list time addtotail for 10000 is: 136 ms
// single linked list time addtotail for 100000 is: 17881 ms
// double linked list time addtohead for 10000 is: 9 ms
// double linked list time addtohead for 100000 is: 40 ms
// double linked list time addtotail for 10000 is: 45 ms
// double linked list time addtotail for 100000 is: 65 ms
