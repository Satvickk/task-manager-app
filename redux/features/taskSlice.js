"use client";

import { createSlice } from "@reduxjs/toolkit";

const tasks = [
  {
    id: 1,
    title: "Design Homepage Layout",
    description:
      "Create a responsive layout for the homepage with a focus on UX design.",
    priority: 1,
    isCompleted: false,
  },
  {
    id: 2,
    title: "Fix Login Issue",
    description:
      "Resolve the bug where users are unable to log in with their credentials.",
    priority: 2,
    isCompleted: false,
  },
  {
    id: 3,
    title: "Write Unit Tests for User Module",
    description:
      "Write unit tests to cover all core functionalities in the user module.",
    priority: 3,
    isCompleted: true,
  },
  {
    id: 4,
    title: "Implement Payment Gateway",
    description: "Integrate Stripe payment gateway for subscription services.",
    priority: 1,
    isCompleted: true,
  },
  {
    id: 5,
    title: "Update Product Descriptions",
    description:
      "Revise product descriptions in the database to reflect the new offerings.",
    priority: 3,
    isCompleted: true,
  },
  {
    id: 6,
    title: "Refactor Dashboard Component",
    description:
      "Refactor the dashboard code for better readability and performance.",
    priority: 2,
    isCompleted: false,
  },
  {
    id: 7,
    title: "Set Up Email Notifications",
    description:
      "Configure and deploy email notification service for customer updates.",
    priority: 1,
    isCompleted: false,
  },
  {
    id: 8,
    title: "Optimize Database Queries",
    description:
      "Improve query performance in the reporting module to speed up data retrieval.",
    priority: 2,
    isCompleted: false,
  },
  {
    id: 9,
    title: "Prepare Marketing Campaign",
    description:
      "Collaborate with the marketing team to create materials for the new product launch.",
    priority: 3,
    isCompleted: false,
  },
  {
    id: 10,
    title: "Implement Dark Mode",
    description:
      "Add a dark mode option to the application for improved accessibility.",
    priority: 2,
    isCompleted: false,
  },
];

const initialTasks = {
  allTasks: tasks,
  totalLength: tasks.length,
};

export const TaskSlice = createSlice({
  name: "Task",
  initialState: initialTasks,
  reducers: {
    addTask: (state, action) => {
      state.allTasks = [action.payload, ...state.allTasks];
      state.totalLength = state.allTasks.length;
    },
    updateTask: (state, action) => {
      state.allTasks = state.allTasks.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    setTasks: (state, action) => {
      state.allTasks = action.payload || [];
      state.totalLength = state.allTasks.length;
    },
    deleteTask: (state, action) => {
      state.allTasks = state.allTasks.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deleteAllTask: (state, action) => {
      return initialTasks;
    },
  },
});

export const { addTask, deleteAllTask, deleteTask, setTasks, updateTask } =
  TaskSlice.actions;

export default TaskSlice.reducer;
