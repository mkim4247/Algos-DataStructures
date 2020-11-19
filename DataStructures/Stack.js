class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) return undefined;
    let current = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current;
  }
}
