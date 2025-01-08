debugger

let toDoList = [];

toDoList.push("Task 1", "Task 2", "Task 3");

toDoList.unshift("Task 4", "Task 5");

console.log("Current toDoList:", toDoList);

let completedLastTask = toDoList.pop();
console.log("Completed last task:", completedLastTask);

let completedFirstTask = toDoList.shift();
console.log("Completed first task:", completedFirstTask);

console.log("Updated toDoList:", toDoList);
