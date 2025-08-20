/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================

  /* 
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
 function filterToDos(todos, callback) {
  return todos.filter(callback);

}
const notDone = filterToDos(todos, thing => thing.completed === false);

// I'm trying to write this code but the best I can do is get it to output the first bit of the array

  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  
  const sorted = todos.sort((a, b) => a.priority - b.priority); // need to specify in the  a-b which part of the array is going to be compared



  /*function(a, b){return b - a}
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  const mapped = todos.map(todosTwo => todos.completed = true );

  console.log(mapped);
  
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
   function filterToDos(todos, callback) {
  return todos.filter(callback);

}
const comboList = filterToDos(todos, thing => thing.completed === false);
const incompleteTask = comboList.sort((a, b) => a.priority - b.priority);
  
// how do you properly chain anon functions together...

  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  console.log("Incomplete Tasks:", notDone);
  console.log("Sorted by Priority:", sorted);
  console.log("All Tasks Completed:", mapped);
 console.log("Sorted Incomplete Tasks:", incompleteTask);
  
 // I don't know why the true true true array keeps popping up at the top but everything looks like its outputting okay afterward???