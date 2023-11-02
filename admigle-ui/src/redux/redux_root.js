
import { configureStore } from '@reduxjs/toolkit';
import languageState from './langredux_logic.js';
import dropListState from './drop_list_logic.js';
import connectionList from "./connection_api's.js";

export default configureStore({
    reducer: {
        language: languageState,
        drop_list: dropListState,
        connection_list: connectionList, 
    },
});
