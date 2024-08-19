const LinkedList = require("./Linked_List");

const groceries = new LinkedList();

// 1. Prepend some items
groceries.prepend("Banana");
groceries.prepend("Apple");
groceries.prepend("Orange");
console.log("After prepending items:");
console.log(groceries);