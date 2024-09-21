import { createSelector } from "@reduxjs/toolkit";
import { sliceNames } from "../../const";

const selectFilter = (state) => state[sliceNames.AppData].filter;

export const getFilter = createSelector([selectFilter], (filter) => filter)
export const getSelectedFilter = createSelector((state) => state.selectedFilter, (filter) => filter)
