# Task Manager

A simple task management application built with **Next.js** and **React** that allows users to manage tasks with functionalities to add, edit, delete, and mark tasks as completed. The application features server-side rendering (SSR) for efficient initial loading of tasks.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Sorting Approach](#sorting-approach)
- [Technologies Used](#technologies-used)

## Features

1. **Add New Task**: Users can create tasks with a title, description, and priority (high, medium, low).
2. **Edit Task**: Tasks can be edited to update their title, description, and priority.
3. **Mark as Completed**: Users can toggle the completion state of tasks.
4. **Delete Task**: Users can remove tasks from the list.
5. **Dynamic Sorting**: Tasks can be sorted by priority, displaying high-priority tasks at the top of the list.
6. **Responsive Design**: The UI is styled to be responsive and visually clear, with color coding based on task priority.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
2. **Install Node Modules**
   ```bash
   npm install
3. **Run the development Server**
   ```bash
   npm run dev
4. **Open your browser and navigate to http://localhost:3000**


## Sorting Approach

The tasks are stored in an array and can be sorted based on their priority using a simple data structure. The priority is represented as a numeric value where:

**High priority: 1**.
**Medium priority: 2**.
**Low priority: 3**.

When displaying the tasks, the application sorts the tasks array by the priority value in ascending order (i.e., high priority first). This is achieved using the **.sort()** method in JavaScript, which takes a comparison function to determine the order. The completed tasks are then displayed at the bottom of the list to clearly distinguish between pending and completed tasks.


## Technologies Used

1. **Next.js**: For server-side rendering and routing.
2. **React**: For building user interfaces.
3. **Redux Toolkit**: For state management.
4. **React Hook Form**: For managing form states and validations.
5. **Yup**: For schema validation of form inputs.
6. **Tailwind CSS**: For styling the application.
