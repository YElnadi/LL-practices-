class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0
  }

  addToHead(value) {
    const newNode = new Node(value, next);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1
  }

  addToTail(value) {
    const newNode = new Node(value, next);
    if (this.head === null) {
      this.head = newNode;
      this.length += 1
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.length += 1
    }
  }
  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
