const LinkedList = require("./Linked_List");

const groceries = new LinkedList();

// 1. Prepend some items
groceries.prepend("Banana");
groceries.prepend("Apple");
groceries.prepend("Orange");
console.log("After prepending items:");
console.log(groceries);
// 2. Remove the last item using pop
const removedLast = groceries.pop();
console.log(`Popped the last item: ${removedLast}`);
console.log("After popping the last item:");
console.log(groceries);
