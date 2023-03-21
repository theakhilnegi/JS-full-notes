// ----------<script src="./app.js" type="module" defer></script> is important to error free execution---------
import{firstName as fname} from "./util/fname.js"
import{age} from "./util/age.js"
import P, {Person2} from "./util/person.js"       //------you need not to {} to default class and use different name then import file------
//------import {Person, Person2} from "./util/person.js",   you can do like this if no default was there------

console.log(fname,age);
const person = new P("Akhil","Negi",21);
person.info();