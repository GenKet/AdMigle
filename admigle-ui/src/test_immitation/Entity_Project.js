"use strict";

class Project {
  constructor(name,description, date, type) {
    this.name = name;
    this.description = description;
    this.date_created= date;
    this.type = type
  }
}


export default function create_project(name_project,description, date, type){
    const project =  new Project(name_project,description, date, type );
    return project;
}
