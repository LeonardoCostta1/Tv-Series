import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModalTrue(state) {
      state.value = true
    },
    setModalFalse(state) {
      state.value = false
    },
  },
})

export const { setModalTrue, setModalFalse } = modalSlice.actions
export default modalSlice.reducer