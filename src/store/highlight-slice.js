import { createSlice } from "@reduxjs/toolkit"

export const highlightSlice=createSlice({
    name:'highlight',
    initialState:{
        activeHighlight:0,
    },
    reducers:{
        setactiveHighlight:(state,action)=>{
            state.activeHighlight=action.payload
        },
    }
})

const highlightSliceActions=highlightSlice.actions;
export default highlightSliceActions;