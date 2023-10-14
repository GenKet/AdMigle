'use strict';

import { createSlice } from '@reduxjs/toolkit';

export const Drop_List_State = createSlice({
    name:'drop_list', 
    initialState:{
     value:false,
    }, 
    reducers:{
        visib_list:(state)=>{
            state.value = !state.value;
        }
    }
});

export const {
    visib_list
} = Drop_List_State.actions;

export default Drop_List_State.reducer;