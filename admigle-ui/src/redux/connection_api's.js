
import { createSlice } from '@reduxjs/toolkit';

export const connectionList = createSlice({
    name: 'connection_list',
    initialState: {
        value: ['FaceBook']
    },
    reducers: {
        add_api: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload);
        }
    }
});

export const { add_api } = connectionList.actions;

export default connectionList.reducer;
