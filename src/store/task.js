import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// const taskSlice = useSelector(state => state.task.todo);

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  try {
    const response = await axios.get("http://localhost:3000/todos");
    return { tasks: response.data };
  } catch (error) {
    return { error: error.message };
  }
});

 export const AddUser = createAsyncThunk("AddUser", async ({userName, password}) => {
  try {
    console.log(userName)
    console.log(password);
    const response = await axios.post("http://localhost:3000/todos", {
      user: {
        userName: userName,
        userPassword: password
      },
      todo:[{
        task:userName,
        isEditing: false, 
        isComplete: false
      }]
    });
    return response.data.user;
  } catch (error) {
    return { error: error.message };
  }
});

// const initialState = {
//   todo: [],
//   isLoading: false,
//   isError: null
// };

const initialState = {
  users: {
    userData: {
      userInfo: [],
      userTodos: [],
    },
  },
  isLoading: false,
  isError: null,
};

let taskID = 0;

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      let user = {
        // userId: ++userId,
        userName: actions.payload.userName,
        userPassword: actions.payload.password,
      };
      state.users.userData.userInfo.push(user);
      AddUser()
    },
    addTask: (state, action) => {
      const taskObj = {
        id: ++taskID,
        task: action.payload.task,
        isEditing: false,
        isComplete: false,
      };
      state.users.userData.userTodos.push(taskObj);
      fetchTasks()
    },

    updateTask: (state, action) => {
      state.users.userData.userTodos = state.users.userData.userTodos.map(
        (task) =>
          task.id === action.payload.id
            ? { ...task, isEditing: false, task: action.payload.updatedTask }
            : task
      );
    },

    editTask: (state, action) => {
      state.users.userData.userTodos = state.users.userData.userTodos.map(
        (task) =>
          task.id === action.payload.id ? { ...task, isEditing: true } : task
      );
    },

    completeTask: (state, action) => {
      state.users.userData.userTodos = state.users.userData.userTodos.map(
        (task) =>
          task.id === action.payload.id ? { ...task, isComplete: true } : task
      );
    },

    removeTask: (state, action) => {
      state.users.userData.userTodos = state.users.userData.userTodos.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },

  // Method 1
  // extraReducers: {
  //   [fetchTasks.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [fetchTasks.fulfilled]: (state, action) => {
  //     state.todo = action.payload.tasks
  //   },
  //   [fetchTasks.rejected]: (state, action) => {
  //     state.isError = true;
  //   },
  // }

  // Method 2
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.todo = action.payload.tasks;
      (state.isLoading = false), (state.isError = false);
    });

    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isError = action.payload.error;
    });
    builder.addCase(AddUser.fulfilled, (state, action) => {
     const dataa = action.payload
      console.log(dataa);
      let userName = dataa.userName
      let pwd = dataa.userPassword
      console.log(userName, pwd);
      // let userId = action.payload.userId 
      state.users.userData.userInfo.push({userName, pwd })
    });
    builder.addCase(AddUser.pending, (state, action) => {
      console.log("Pending");
      // let userName = action.payload.userName
      // let userPassword = action.payload.userPassword
      // let userId = action.payload.userId
      // state.users.userData.userInfo.push({userId, userName, userPassword})
    })
    builder.addCase(AddUser.rejected, (state, action) => {
      console.log("error");
      // let userName = action.payload.userName
      // let userPassword = action.payload.userPassword
      // let userId = action.payload.userId
      // state.users.userData.userInfo.push({userId, userName, userPassword})
    })
  },
});


export const {addUser, addTask, editTask, updateTask, completeTask, removeTask } =
  todoSlice.actions;

export default todoSlice.reducer;
