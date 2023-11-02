'use strict';

const Users_DB = [{
    name:'Antonio',
    payment:'USA',
    _key:"20e52730-4432-41ed-ad7a-2b53af9b", 
    website:'https://www.flaticon.com/ru'
}];

const Projects_DB = {
    "22b75429-39d4-44bd-8eb9-8445e0b2":{
        name:'Test1',
        description:'enfvkenrkvner', 
        date_created:new Date().toLocaleDateString('ru-RU', { weekday: 'long',year: '2-digit', month: '2-digit', day: '2-digit' }),
        type:'Google Ads'
    },
    "e8d15bc1-0680-4cdf-a414-c043d7d5":{
        name:'Test1',
        description:'enfvkenrkvner', 
        date_created:new Date(2023, 9, 23).toLocaleDateString('ru-RU', { weekday: 'long',year: '2-digit', month: '2-digit', day: '2-digit' }),
        type:'Google Ads'
    },
}

const UsersProjects_DB = {
    "20e52730-4432-41ed-ad7a-2b53af9b":["22b75429-39d4-44bd-8eb9-8445e0b2", "e8d15bc1-0680-4cdf-a414-c043d7d5"]

}

const add_user_db = (user) =>{
    Users_DB.push(user);
}

const add_project_db = (project_key, project, user_key )=>{
    console.log(project_key, project, user_key)
    Projects_DB[project_key] = project ;
    add_usersproject_db(user_key, project_key);
}

const add_usersproject_db = (user_key, project_key )=>{
    if (UsersProjects_DB[user_key]) {
        UsersProjects_DB[user_key].push(project_key); 
    } else {
        UsersProjects_DB[user_key] = [project_key]; 
    }

}

const get_user_projects = (user_key)=>{
  
    if(UsersProjects_DB[user_key]){
        const userProjects = UsersProjects_DB[user_key];
        return userProjects;
    }
    else{
        return []
    }
}

const get_project_info = (project_key)=>{
    return Projects_DB[project_key];
}

export {get_project_info}

export {get_user_projects};

export {add_user_db};
export {Users_DB};

export {Projects_DB};
export {add_project_db};

export {UsersProjects_DB};


