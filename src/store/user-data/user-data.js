import { createSlice } from "@reduxjs/toolkit"
import { setBodyIsScrolled } from "../action"

const initialState = {
  isBodyScrolled: false
}

const userData = createSlice({
  name: "UserData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setBodyIsScrolled, (state, action) => {
        state.isBodyScrolled = action.payload
      })
  }
})

const { reducer } = userData

export default reducer
