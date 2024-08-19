class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    // Method to remove the last node
    pop() {
      if (!this.head) return null;
  
      if (this.size === 1) {
        const data = this.head.data;
        this.head = null;
        this.size--;
        return data;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      const data = current.next.data;
      current.next = null;
      this.size--;
      return data;
    }
  }

  module.exports = LinkedList;