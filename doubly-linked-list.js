class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null, length = 0) {
    // Your code here
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  addToHead(val) {
    // Your code here
    if (this.head) {
      this.head.prev = new DoublyLinkedListNode(val);
      this.head.prev.next = this.head;
      this.head = this.head.prev;
    } else {
      this.head = new DoublyLinkedListNode(val);
      this.tail = this.head;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    if (this.tail) {
      this.tail.next = new DoublyLinkedListNode(val);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    } else {
      this.tail = new DoublyLinkedListNode(val);
      this.head = this.tail;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
