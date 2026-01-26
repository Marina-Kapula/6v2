
import { createSlice } from '@reduxjs/toolkit'
import notificationReducer from '../reducers/notificationSlice'


const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome to anecdotes app!',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer
