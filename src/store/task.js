import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

let taskID = 0;   

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const taskObj = {
        id: ++taskID,
        task: action.payload.task,
        isEditing: false,
        isComplete: false,
      };
      state.todo.push(taskObj);
    },

    updateTask: (state, action) => {
        state.todo = state.todo.map((task) => task.id === action.payload.id ? {...task, isEditing: false, task: action.payload.updatedTask} : task)
    },
  
    editTask: (state, action) => {
     state.todo = state.todo.map((task) => task.id === action.payload.id ? {...task, isEditing: true} : task)
    },

    completeTask: (state, action) => {
     state.todo = state.todo.map((task) => task.id === action.payload.id ? {...task, isComplete: true} : task);
    },

    removeTask: (state, action) => {
      state.todo = state.todo.filter((task => task.id !== action.payload.id))
    }
  },
});

export const {addTask, editTask, updateTask, completeTask, removeTask} = todoSlice.actions

 export default todoSlice.reducer
