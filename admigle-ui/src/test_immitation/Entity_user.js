"use strict";

class User {
  constructor(name, payment, _key) {
    this.name = name;
    this.payment = payment;
    this._key = _key;
  }
}

export default function create_user(name_user, payment_type, _key_user){
    const user =  new User(name_user, payment_type, _key_user);
    return user;
}
