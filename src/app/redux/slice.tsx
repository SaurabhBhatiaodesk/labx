"use client"; // No need for this in slices typically

import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
};

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const userSlice = createSlice({
  name: 'AddUserSlice',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      console.log("Received action:", action); // Log the action
      const data: User = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.users.push(data);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
