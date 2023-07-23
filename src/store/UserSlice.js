import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: {} }

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    clearUserAndStore(state) {
      // NB this also resets the entire redux store for logout purposes
      state = initialState
    },
  },
})

export const { setUser, clearUserAndStore } = UserSlice.actions
export default UserSlice.reducer