import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api-slice";
import { searchSlice } from "./search-slice";
import {highlightSlice} from "./highlight-slice"
const store=configureStore({
    reducer:{api:apiSlice.reducer,search:searchSlice.reducer,highlight:highlightSlice.reducer}
})

export default store;