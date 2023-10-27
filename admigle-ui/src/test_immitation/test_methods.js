'use strict';
import {v4 as uuidv4} from 'uuid'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

export default function generateRandomKey(length) {
  let key = uuidv4();

  if (key.length > length) {
    key = key.slice(0, length);
  } else if (key.length < length) {
    
    const charactersLength = characters.length;
    const additionalChars = length - key.length;

    for (let i = 0; i < additionalChars; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      key += characters.charAt(randomIndex);
    }
  }

  return key;
}
