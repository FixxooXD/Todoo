import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

let userId = 0;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, actions) => {
        let user = {
            userId: ++userId,
            userName: actions.payload.userName,
            password: actions.payload.password
        }
       state.users.push(user);
    }
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;