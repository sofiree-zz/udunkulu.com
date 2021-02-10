import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "searchResults",
  initialState: { list: {} },
  reducers: {
    searchResultsRequested: (searchResults, action) => {
      searchResults.loading = true;
    },
    searchResultsReceived: (searchResults, action) => {
      searchResults.list = action.payload.data;
      searchResults.loading = false;
    },
    searchResultsRequestFailed: (searchResults, action) => {
      searchResults.loading = false;
    },
  },
});

export const {
  searchResultsRequested,
  searchResultsReceived,
  searchResultsRequestFailed,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadsearchResults = (searchQuery) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/search?q=${searchQuery}`,
      method: "get",
      onStart: searchResultsRequested.type,
      onSuccess: searchResultsReceived.type,
      onError: searchResultsRequestFailed.type,
    })
  );
};
