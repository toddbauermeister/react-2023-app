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
      // This is handled in the root reducer
      // Clears the entire redux store
    },
  },
})

export const { setUser, clearUserAndStore } = UserSlice.actions
export default UserSlice.reducer