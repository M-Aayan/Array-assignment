# Array-assignment
The code manipulates a toDoList array by adding and removing tasks using JavaScript array methods (push, unshift, pop, and shift). These methods allow us to manage the tasks dynamically by adding them at either end of the list and removing them when completed. The program also logs the changes to the console to track the state of the list.


How It Works


Start with an Empty Array:
The array toDoList is initialized as an empty array ([]), representing a blank to-do list with no tasks.

Adding Tasks to the End:
The push method is used to add three tasks ("Task 1", "Task 2", and "Task 3") to the end of the array.
The push method allows you to append one or more elements to the array at the last position.

Adding Tasks to the Beginning:
The unshift method is used to add two tasks ("Task 4" and "Task 5") to the beginning of the array.
The unshift method inserts elements at the very start of the array, shifting the existing elements to the right.
Printing the Current List:

The console.log statement outputs the current state of the toDoList array, showing the tasks in their updated order after the additions.
Removing the Last Task:

The pop method removes the last element ("Task 3") from the array.
The removed task is stored in the variable completedLastTask and is logged to the console as the "completed last task".
Removing the First Task:

The shift method removes the first element ("Task 4") from the array.
The removed task is stored in the variable completedFirstTask and is logged to the console as the "completed first task".
Printing the Updated List:

Another console.log statement prints the updated toDoList array to display the remaining tasks after the removals.


How It Is Made

Array Initialization:
Start by declaring an empty array (let toDoList = [];).

Adding Tasks:
Use push to add tasks to the end: toDoList.push("Task 1", "Task 2", "Task 3");.
Use unshift to add tasks to the beginning: toDoList.unshift("Task 4", "Task 5");.

Removing Tasks:
Use pop to remove and store the last task: let completedLastTask = toDoList.pop();.
Use shift to remove and store the first task: let completedFirstTask = toDoList.shift();.

Logging Output:
Print the state of the list at each stage using console.log, making it easier to track changes.


Key JavaScript Methods Used
push: Adds one or more elements to the end of the array.
unshift: Adds one or more elements to the beginning of the array.
pop: Removes and returns the last element of the array.
shift: Removes and returns the first element of the array.
console.log: Outputs information to the console for debugging or tracking changes.

Real-Life Application
This approach can be applied to any task management system, like a to-do list app. By dynamically adding and removing tasks, you can create features for adding new tasks, completing tasks, and managing task priorities efficiently.

Would you like a visual flow diagram or further explanation on any part of this?
