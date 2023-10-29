"use strict";
import { Users_DB } from "./test_database_users";

class User {
  constructor(name, payment, _key, website) {
    this.name = name;
    this.payment = payment;
    this._key = _key;
    this.website = website;
  }
}

function create_user(name_user, payment_type, _key_user, website){
    const user =  new User(name_user, payment_type, _key_user, website);
    return user;
}

export {create_user};

function get_user_name_by_key(key){
  const user =  Users_DB.find(user=>user._key === key);
  if(user){
    return user.name;
  }
  else{
    return undefined;
  }
}

export {get_user_name_by_key};