'use strict';

import { createSlice } from '@reduxjs/toolkit';
import language_store from '../static _data/static_data_store'

const default_prop = language_store.rus;

export const languageState = createSlice({
    name:'language', 
    initialState:{
     value:default_prop,
    }, 
    reducers:{
        switchLang:(state, action)=>{
            state.value = action.payload;
        }
    }
});

export const {
    switchLang
} = languageState.actions;

export default languageState.reducer;