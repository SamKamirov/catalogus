import { createSlice } from "@reduxjs/toolkit";
import { setFilter, setSelectedFilter } from "../action";

const initialState = {
  filter: null,
  selectedFilter: null
}

const appData = createSlice({
  name: 'AppData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setFilter, (state, action) => {
        state.filter = action.payload
      })
      .addCase(setSelectedFilter, (state, action) => {
        state.selectedFilter = action.payload
      })
  }
})

const { reducer } = appData

export default reducer
