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


// 3. Insert an item at a specific position
groceries.insertAt("Grapes", 1); // Inserting at index 1
console.log('After inserting "Grapes" at index 1:');
console.log(groceries);

// 4. Remove an item at a specific position
const removedAt = groceries.removeAt(1); // Removing at index 1
console.log(`Removed item at index 1: ${removedAt}`);
console.log("After removing the item at index 1:");
console.log(groceries);

// 5. Check the size of the linked list
console.log(`Final size of the list: ${groceries.size}`);
