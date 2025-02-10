Input
The program allows users to enter a task description in an input field. The input is a text string that represents a to-do item. Users interact with the program using an input box and an "Add Task" button. Pressing this button submits the entered task into the system. Additionally, each task has an associated "Delete" button, allowing users to remove tasks from the list.

Process
When a user adds a task, the program updates the state using React’s useState hook. The task is assigned a unique ID (using Date.now()) and is added to an array of to-do items. When a user clicks the "Delete" button, the program filters out the selected task from the array. The application re-renders dynamically using React’s state management.

Output
The program displays a list of tasks with a "Delete" button for each. The tasks are visually formatted in a styled list. When a task is deleted, the interface updates in real time, reflecting the changes dynamically.