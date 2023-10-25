'use strict';



const Users_DB = [{
    name:'wkjekjwekd',
    payment:'USA',
    _key:'wejbjehvnkNCjkC23R3'
}];

const add_user_db = (user) =>{
    Users_DB.push(user);

    console.log(Users_DB);
}

export {add_user_db};
export {Users_DB};