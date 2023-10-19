'use strict';

import {configureStore} from  '@reduxjs/toolkit';
import  languageState  from './langredux_logic.js';
import Drop_List_State from './drop_list_logic.js'



export default configureStore({
    reducer:{
        language:languageState,
        drop_list:Drop_List_State,
    },
});



