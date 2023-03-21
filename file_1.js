// <--------------File_1---------------->

// -----------Title: Hello world program-----------
// console.log("Hello World");



// <--------------File_2---------------->

// -----------Title: Intro to variable-----------
// "use strict";

// fname="akhil";
// console.log(fname);
// fName="negi";
// console.log(fname);



// <--------------File_3---------------->

// -----------Title: Ruels for naming variables-----------
// var 1num=34;       ------invalid------
// console.log(1num);

// var $num=53;          ------valid--------($ and _)
// console.log($num);



// <--------------File_4---------------->

// -----------Title: Let keyword-----------
// let num=35;          -------let is mainly(almost 90%) use for variable declaration------
// console.log(num);

// var fname="akhil";   ----no error---
// var fname="negi";

// let fname="akhil";    ------give error as let cannot declair same variable twice-----
// let fname="akhil";    ------maily let is used because declaring twice saw variable can cause trouble in big codes-----



// <--------------File_5---------------->

// -----------Title: Const keyword-----------
// const pi=3.14;         ------value cannot change afterwords-----



// <--------------File_6---------------->

// -----------Title: String indexing-----------
// let name="Akhil";       
// console.log(name[2]);       ------it will print h------

// let fullname="akhil negi";
// console.log(name.length);
// console.log(fullname[fullname.length-1]);  



// <--------------File_7---------------->

// -----------Title: Useful string methods-----------
// let fname="    akhilnegi    ";       ------trim() function------
// console.log(fname);
// console.log(fname.length);
// fname=fname.trim();                ------string is unmutable-----
// console.log(fname);
// console.log(fname.length);

// fname="AkhILneGi";       ------toUpperCase toLowerCase slice------
// console.log(fname.toUpperCase());
// console.log(fname.toLowerCase());
// console.log(fname.slice(3,7));



// <--------------File_8---------------->

// -----------Title: Typeof, string to num and num to string-----------
// let x=435;
// console.log(typeof x);
// x="akhil";
// console.log(typeof x);

// let num=56;
// console.log(typeof (num+""));
// num+""       ------this convert number into string------
// +"56"        ------this convert string into number-----
// console.log(typeof +"56");

// let num=37;
// console.log(typeof String(num));
// let num2="54";
// console.log(typeof Number(num2));



// <-------------File_9---------------->

// -----------Title: String concatenation-----------
// let fname="Akhil";
// let lname="Negi";
// let fullname= fname + " " + lname;     -----string concatenate-----
// console.log(fullname);

// let num1="14";
// let num2="4";
// let total= +num1 + +num2;       ------this will first convert string into number and then add them------
// console.log(total);



// <--------------File_10---------------->

// -----------Title: Template string-----------
// let name="Akhil";
// let age=20;
// let sen1="My name is "+name+" and my age is "+age;
// --------OR-------
// let sen2=`My name is ${name} and my age is ${age}`;       ------this is called template string------
// console.log(sen1);
// console.log(sen2);



// <--------------File_11---------------->

// -----------Title: Undefined, null, bigint-----------
// ------null and undefined-------
// let num;          ------no error nut it is undefined------
// const x;       ------error------
// console.log(typeof num);
// num="Akhil";
// console.log(typeof num, num);
// let x=null;
// console.log(typeof x, x);
// x="ak";
// console.log(typeof x, x);
// console.log(typeof null);        -----this will show that its datatype is an object but its a bug and datatype is null-----
// console.log(typeof undefined);   -----as many libraries and framework works on this bug so we dont change it-----
// console.log(typeof "akhil");     -----rest all show undefine string number respectively-----
// console.log(typeof 30);

// let num1=BigInt(2939794);
// let num2=93749379n;
// console.log(num1+num2);       ------both add because both are BigInt, bigint is similar as long in C------
// console.log(Number.MAX_SAFE_INTEGER);       ------This will show maximun integer you can you without BigInt------



// <--------------File_12---------------->

// -----------Title: Boolean values and == vs === and != vs !==-----------
// let num1=45;
// let num2=50;
// console.log(num1<num2);      -----False Boolean-----
// console.log(num2<num1);      -----True boolean-----

// let num1="30";
// let num2=30;
// console.log(num1==num2);       ------true because it doesnot check datatype------
// console.log(num1===num2);       ------False because it check datatypes also------

// console.log(num1!=num2);       ------False as of previous reason------
// console.log(num1!==num2);       ------True as of previous reason------



// <--------------File_13---------------->
 
// -----------Title: truely and falsy value-----------
// -----falsy values are "",null,undefined,0-----
// -----truely values are "abc",1,-1," "-----
// let x=" ";
// if (x) {
//     console.log("condition contain truely value");  
// } else {
//     console.log("condition contain falsy value");
// }



// <--------------File_14---------------->

// -----------Title: if else condition-----------
// let num = 13;
// if(num>18){
//     console.log("The person can vote.");
// }
// else{
//     console.log("The person cant vote.");
// }



// <--------------File_15---------------->

// -----------Title: Ternary/conditional operator-----------
// let age=4;
// let drink= age>10 ? "coffee" : "milk";       ------this will judge the condition and then execute that block------
// console.log(drink);



// <--------------File_16---------------->

// -----------Title: And, or operator-----------
// var fname="Akhil";
// var age=20;

// if(fname[0]==="A" && age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }

// if(fname[0]==="S" || age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }



// <--------------File_17---------------->

// -----------Title: Nested if else-----------
// let winNum=33;
// let userInput= +prompt("Enter a number");
// if(userInput===winNum){
//     console.log("your guess is right!");
// }
// else{
//     if(userInput<winNum){
//         console.log("too low...");
//     }
//     else{
//         console.log("too high...");
//     }
// }



// <--------------File_18---------------->

// -----------Title: Else if-----------
// let marks=45;

// if (marks>=80) {
//     console.log("A grade...");
// } else if(marks>=60 && marks<80) {
//     console.log("B grade...");
// } else if(marks>=40 && marks<60){
//     console.log("C grade...");
// } else{
//     console.log("Failed hai tu bsdk...");
// }



// <--------------File_19---------------->

// -----------Title: Switch statement-----------
// let n="akhil";
// switch (n) {
//     case 10:
//         console.log("ans is 10");
//         break;
//     case 20:
//         console.log("ans is 20");
//         break;
//     case 30:
//         console.log("ans is 30");
//         break;
//     case "akhil":
//         console.log("ans is akhil");
//         break;
//     default:
//         break;
// }



// <--------------File_20---------------->

// -----------Title: While loop-----------
// let i=0;
// while(i<10){
//     console.log(i);
//     i++
// }



// <--------------File_21---------------->

// -----------Title: While example-----------
// let i=0;
// let total=0;
// while(i<11){
//     total=total+i;
//     i++
// }
// console.log(total);



// <--------------File_22---------------->

// -----------Title: For loop-----------
// for(let i=0; i<11; i++){
//     console.log(`value of i is ${i}`);
// }
// console.log("value of i is ", i);       ------this will show error but if we use var instead of let, that will not show error------



// <--------------File_23---------------->

// -----------Title: For loop example-----------
// let total=0;
// for(let i=0;i<11;i++){
//     total=total+i;
// }
// console.log(total);



// <--------------File_24---------------->

// -----------Title: Break and continue-----------
// for (let i = 0; i < 10; i++) {
//     if(i===5){
//         break;
//     }
//     console.log(i);    
// }
// for (let i = 0; i < 10; i++) {
//     if(i===5){
//         continue;
//     }
//     console.log(i);    
// }



// <--------------File_25---------------->

// -----------Title: Do-while loop-----------
// let i=11;
// do {
//     console.log(i);
//     i++;
// } while (i<10);



// <--------------File_26---------------->

// -----------Title: Intro to array-----------
// -----Ordered collection of items and they are mutables-----
// let names=["akhil","smriti","shubham","mahesh"];
// let numbers=[45,63,34,24,65];
// let mixed=["akhil",465,744.664,"smriti"];
// console.log(names[3]);
// console.log(numbers[3]);
// console.log(names);
// names[2]="ayush";
// console.log(names);
// console.log(mixed[3]);
// console.log(typeof 45.632);
// console.log(typeof names);
// console.log(typeof numbers);
// console.log(Array.isArray(mixed));       ------to check whether its a array or not because typeof show array an object------
// let obj={};       //------object literal------
// console.log(Array.isArray(obj));       ------it is an object so it will show false------



// <--------------File_27---------------->

// -----------Title: Push/pop and shift/unshift-----------
// let names=["akhil","smriti","shubham","mahesh"];
// names.push("ayush");
// console.log(names);
// let poped= names.pop();
// console.log(names);
// console.log(poped);

// names.unshift("shruti");
// console.log(names);
// let shifted= names.shift();       ------unshift is same as push but it enter item at the starting------
// console.log(names);       ------shift is same as pop but remove item from starting------
// console.log(shifted);       ------push and pop are faster than shift unshift------



// <--------------File_28---------------->

// -----------Title: Primitive vs reference data type-----------
// let num1 = 33;
// let num2 = num1;
// console.log(num1,num2);
// num1++;
// console.log(num1,num2);       ------here num1 increase but num2 is same------

// let arr1=[1,2,3,4,5];
// let arr2=arr1;
// console.log(arr1,arr2);
// arr1.push(44);
// console.log(arr1,arr2);       ------here arr1 and arr2 both push the element------
// console.log("num1===num2   ",num1===num2);
// console.log("num1==num2   ",num1==num2);
// console.log("arr1===arr2   ",arr1===arr2);
// console.log("arr1==arr2   ",arr1==arr2);
// let arr3=[1,2,3,4,5];
// console.log("arr1===arr3   ",arr1===arr3);
// console.log("arr1==arr3   ",arr1==arr3);



// <--------------File_29---------------->

// -----------Title: Clone and concatenate array-----------
// -----There are four methods to clone an array-----

// -----Method 1-----
// let arr1 = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];       ------this is simple paste all elements of main array which is very bad method------
// console.log(arr1===arr2);
// arr1.push(33);
// console.log("arr1 -> ",arr1,"     arr2 -> ",arr2);

// -----Method 2-----
// let arr1 = [1,2,3,4,5];
// console.log(arr1.slice(0));
// let arr2 = arr1.slice(0);       //------this use slice function like in string and add all ements of arr1 from starting to end in arr2------
// console.log(arr1===arr2);
// arr1.push(33);
// console.log("arr1 -> ",arr1,"     arr2 -> ",arr2);

// -----Method 3-----
// let arr1 = [1,2,3,4,5];
// let arr2 = [].concat(arr1);       ------in this we concatenate arr1 into an empty array------
// console.log(arr1===arr2);
// arr1.push(33);
// console.log("arr1 -> ",arr1,"     arr2 -> ",arr2);

// -----Method 4-----
// let arr1 = [1,2,3,4,5];
// let arr2 = [...arr1]       ------this is a new method using spread opeartor in which we use three dots and then white array name------
// console.log(arr1===arr2);
// arr1.push(33);
// console.log("arr1 -> ",arr1,"     arr2 -> ",arr2);

// -----slice is faster but we use spread operator most and it also used in react-----
// -----task-----
// arr1=[1,2,3,4,5];
// arr2=[...arr1].concat(["akhil","smriti","shruti"]);  
// ----------OR----------
// arr2=[...arr1, "akhil","smriti","shruti"];      
// ----------OR----------
// arr3=["akhil","smriti","shruti"]; 
// arr2=[...arr1,...arr3 ];      
// console.log("arr1 -> ",arr1,"     arr2 -> ",arr2);



// <--------------File_30---------------->

// -----------Title: For loop in array-----------
// let arr=["akhil","smriti","shruti","shubham","mahesh"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].toUpperCase()); 
// }



// <--------------File_31---------------->

// -----------Title: Use const for creating array-----------
// -----mostly developer use const to declare array rather than let-----
// const arr=["akhil","smriti","shruti"];
// arr=["shubham","mahesh"];       ------this will show error as we cannot declare again same array------
// arr.push("shankey");       ------but we can push,pop,shift,unshift, means all function to array declard by const------
// console.log(arr);      ------we use const because it help in double drclaring same array---- 



// <--------------File_32---------------->

// -----------Title: While loop in array-----------
// const arr=["akhil","smriti","shruti"];
// const arr2=[];
// let i = 0;
// while(i<arr.length){
//     arr2.push(arr[i].toUpperCase());
//     i++;
// }
// console.log(arr2);



// <--------------File_33---------------->

// -----------Title: For of loop in array-----------
// const names=["akhil","smriti","shruti"];
// for(let nam of names){       ------mainly use to extract elements of an array------
//     console.log(nam);
// }



// <--------------File_34---------------->

// -----------Title: For in loop in array-----------
// const names=["akhil","smriti","shruti"];
// for(let index in names){
//     console.log(index+"  ->  "+names[index]);
// }
// -----we mainly use simple for loop or for of loop-----



// <--------------File_35---------------->

// -----------Title: Array destructuring-----------
// const names=["akhil","smriti","shruti"];
// -----normal method-----
// let name1=names[0];
// let name2=names[1];
// let name3=names[2];
// console.log("name1 -> ",name1,",   name2 -> ",name2,",   name3 -> ",name3);

// -----array destructuring method-----
// let [name1,name2,name3]=names;
// console.log("name1 -> ",name1,",   name2 -> ",name2,",   name3 -> ",name3);
// -----Task 1...
// let [nam1,nam2]=names;
// console.log("nam1 -> ",nam1,",   nam2 -> ",nam2);
// -----Task 2...
// let [nm1,nm2,nm3,nm4]=names;
// console.log("nm1 -> ",nm1,",   nm2 -> ",nm2,",   nm3 -> ",nm3,",   nm4 -> ",nm4);
// -----Task 3...
// let [n1, , n2]=names;
// console.log("n1 -> ",n1,",   n2 -> ",n2);
// -----Task 4...
// const newNames=names.slice(1);
// console.log(newNames);
// -----Task 5...
// const arr=[1,2,3,4,5,6,7,8];
// let [x1,x2,x3, ...newArr]=arr;
// console.log("x1 -> ",x1,",   x2 -> ",x2,",   x3 -> ",x3,",   newArr -> ",newArr);



// <--------------File_36---------------->

// -----------Title: Object intro-----------
// Object are reference type datastructure, mainly use for real world data and data stored in key value pair
// const person ={
//     name:"Akhil",
//     age:20,
//     hobbies:["songs","flirt","wiskey"]
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// person.gender="male";
// console.log(person);
// console.log(person.gender);



// <--------------File_37---------------->

// -----------Title: Difference between dot and bracket notation-----------
// const person ={       ------you can write keys with or without doublestrings------
//     "first name":"Akhil",     -----we use doublestrings for those keys which have two or more name----- 
//     "age":20,
//     "hobbies":["songs","flirt","wiskey"]
// };
// console.log(person.first name);       ------we can not use like this------
// console.log(person["first name"]);
// console.log(person["hobbies"][2]);
// person["surname"]="Negi";
// console.log(person.surname);
// -----task...
// const key_name="email";
// person[key_name]="akhilnegi@gmail.com";       ------this will make email as a key not key_name as a key------
// console.log(person);



// <--------------File_38---------------->

// -----------Title: How to iterate objects-----------
// const person ={
//     name:"Akhil", 
//     age:20,
//     hobbies:["songs","flirt","wiskey"]
// };
// -----Method 1 (for in loop)-----
// for(let key_name in person){
//     console.log(key_name);
//     console.log(typeof key_name);
//     console.log(person[key_name]);       //------person.key will not work because key_name is string not key------
// }

// -----Method 2 (object.keys)-----
// console.log(Object.keys(person));
// for (let i = 0; i < (Object.keys(person)).length; i++) {
//     console.log(person[(Object.keys(person))[i]]);    
// }
// for(let key_name of Object.keys(person)){
//     console.log(person[key_name]);
// }



// <--------------File_39---------------->

// -----------Title: Computed properties-----------
// const key1 = "Akhil";
// const key2 = "Smriti";
// const key3 = "Raja";

// const value1 = "Negi";
// const value2 = "Sharma";
// const value3 = "Babu";
// const obj={       ------these are called computed properties------
//     [key1]:value1,
//     [key2]:value2,
//     [key3]:value3
// };
// console.log(obj);
// -----OR-----
// const obj2={};
// obj2[key1]=value1;
// obj2[key2]=value2;
// obj2[key3]=value3;
// console.log(obj2);



// <--------------File_40---------------->

// -----------Title: Spread operator in objects-----------
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[11,...arr2,22,...arr1,"abcd",arr2,..."abcd"];
// console.log(arr3);

// const obj1={
//     k1:"v1",
//     k2:"v2",
//     k3:"v3"
// };
// const obj2={
//     k1:"vNew",
//     k4:"v4",
//     k5:"v5"
// };
// const newObj = {...obj1,...obj2};       ------there are no two keys same so k1 of obj2 overwrite k1 og obj1 as obj2 spread after obj1------
// console.log(newObj);
// const newObj2 = {...obj2,...obj1};
// console.log(newObj2);

//-----Task...
// const newObj={..."abcde"};
// console.log(newObj);
// const newObj2={...["akhil","smriti","Negi"]};
// console.log(newObj2);
// const newObj3={..."abcd", ...["akhil","smriti","Negi"]};
// console.log(newObj3);



// <--------------File_41---------------->

//-----------Title: Destructuring of objects-----------
// const obj={
//     burbon: "jimbim",
//     scotch: "macallen",
//     irish: "jameson"
// };
//-----Normal way-----
// let burbon=obj.burbon;
// let scotch=obj.scotch;
// let irish=obj.irish;
// console.log(burbon,scotch,irish);

//-----Destructuring-----
// const {burbon,scotch,irish}=obj;       ------these variable should be same as keys------
// console.log(burbon,scotch,irish);
// const {burbon:v1,scotch:v2,irish:v3}=obj;       //------if you want to make new variable name then do like this but now scotch,irish etc are nothing------
// console.log(v1,v2,v3);

// obj.japanese="hibiki";
// const {burbon,scotch,...other}=obj;
// console.log(burbon);
// console.log(other);



// <--------------File_42---------------->

//-----------Title: Object inside array-----------
// const users=[
//     {id:1, name:"akhil", age:21},
//     {id:2, name:"smriti", age:11},
//     {id:3, name:"mahesh", age:33},
// ]
// console.log(users);

// for(let user of users){
//     console.log(user);
//     console.log(user.name);
// }



// <--------------File_43---------------->

//-----------Title: Nested destructuring-----------
// const users=[
//     {id:1, name:"akhil", age:21},
//     {id:2, name:"smriti", age:11},
//     {id:3, name:"mahesh", age:33},
// ]

// -----Task...
// const [user1,user2,user3]=users;
// console.log(user1,user2);

// const [{name}, , {age}]=users;
// console.log(name,age);

// const [ ,{name:user2_name},{id:user3_id}]=users;
// console.log(user2_name,user3_id);

// const [ ,{name:user2_name,age:user2_age},{id:user3_id}]=users;
// console.log(user2_age);
// console.log(user2_name,user3_id);



// <--------------File_44---------------->

//-----------Title: Function intro-----------
// function helloWorld(){
//     console.log("Hello World");
// }
// function add(num1,num2){
    //     return num1+num2;
// }
// helloWorld();
// const value=add();
// const value2=add(3,4);
// console.log(value);
// console.log(value2);

// function even(num){
//     if(num%2===0){
//         return 1;
//     }
//     return 0;
// }
// console.log(even(35));

// -----Task...
// function find(arr,target){
//     let x=0
//     for(let i of arr){
//         if(i===target){
//             return x;
//         }
//         x++;
//     }
//     return "not found";
// }
// console.log(find([1,2,3,4,5,6,7,8],45));
 


// <--------------File_45---------------->

//-----------Title: Function expression-----------
//    ------A function can also be written like this, this is called function declaration------
// const find = function(arr,target){
//     let x=0
//     for(let i of arr){
//         if(i===target){
//             return x;
//         }
//         x++;
//     }
//     return "not found";
// }
// console.log(find([1,2,3,4,5,6,7,8],4));



// <--------------File_46---------------->

//-----------Title: Arrow function-----------
//    ------A function can also be written like this, this is called function declaration------
// const hellowWorld = () => {
//     console.log("Hello World");
// }
// hellowWorld();

// const find = (arr,target) => {
//     let x=0
//     for(let i of arr){
//         if(i===target){
//             return x;
//         }
//         x++;
//     }
//     return "not found";
// }
// console.log(find([1,2,3,4,5,6,7,8],5));

// const isEven = num => {       ------if you have only one(not zero or more than one) parameter then you can also remove brackets------
//     if(num%2===0){
//         return true;
//         }
//     return false;
// }
// console.log(isEven(32));

// const isEven = num => num%2===0;       ------if you have only one return line then you can also remove curly brackets------    
// console.log(isEven(32));



// <--------------File_47---------------->

//-----------Title: Hoisting-----------
// hello();       ------this works because of hoisting------
// function hello(){
//     console.log("Hello World");
// }

// const hello=function(){console.log("hellow world");}       ------function expression and arrow function will not work if it is called before declaration------

// console.log(a1);
// var a1=45;       ------this will work but show undefined------
// console.log(a2);
// let a2=55;       ------this will give errors------
// console.log(a3);
// const a3=65;       ------this will also show errors------



// <--------------File_48---------------->

//-----------Title: Function inside function-----------
// function app(a,b){
//     const add = function(a,b){
//         console.log("first we call function mul");
//         mul(a,b);
//     }
//     const mul = (a,b)=>{
//         console.log("mul of a,b",a*b);
//         return a*b;
//     }
//     const firstNumber = a => console.log("sucess",a);
//     add(a,b);
//     firstNumber(mul(a,b));
// }
// app(5,9);



// <--------------File_49---------------->

//-----------Title: Lexical scope-----------
// const x = "value1";
// function myApp(){
//     function myFunc(){
//         const x = "value2";
//         const myFunc2 = () => {
//             const x = "value3";       ------first x use value3 in scope of myfunc2 but if it was not there then it will see in their lexical scope ie. of myFunc------
//             console.log("inside myFunc2: ",x);
//         }
//         myFunc2();
//         console.log("inside myFunc: ",x);
//     }
//     console.log("inside myApp: ",x);
//     myFunc();
// }
// myApp();



// <--------------File_50---------------->

//-----------Title: Block scope vs function scope-----------
//---------let and const are block scope while var is function scope----------
// {
//     let fname="Akhil";
// }
// console.log(fname);       ------this will give error as fname is only valid in that block------

//-----Task...
// {
    //     let x = "Smriti";
//     console.log(x);
// }
// {
    //     let x = "Shruti";
//     console.log(x);       ------both give different value as they only have value in their respective block------
// }
// let x = "Sakshi";
// console.log(x);

//-----Task...
// {
//     var fullname="Akhil Negi";
// }
// console.log(fullname);       ------this will works as we use var------

//-----Task...
// function myApp(){
//     if(1){
//         let firstname="akhil";
//         console.log(firstname);
//     }
//     console.log(firstname);       ------error will generate because of this, it will check firstname in its block or its parent block(lexical scope) not block inside it(if statement)------
// }       ------but if we use var instead of let then it will work------
// myApp();



// <--------------File_51---------------->

//-----------Title: default parameters-----------

//-----Method 1-----
// function add(a,b){
//     if(typeof b ==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
// let ans = add(4);
// console.log(ans);

// -----Method 2-----
// function add(a,b=0){
//     return a+b;
// }
// let ans = add(4);
// console.log(ans);



// <--------------File_52---------------->

//-----------Title: Rest parameters-----------
// function myFun(a,b,...c){
//     console.log("a is ",a);
//     console.log("b is ",b);
//     console.log("c is ",c);       ------this is an array------
// }
// myFun(1,2,3,4,5,6,7,8,9)

//-----Task...
// function add(...a){
//     let sum = 0;
//     for(let i of a){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(add(1,2,3,4,5,6,7,8,9));
// console.log(add(1,2));



// <--------------File_53---------------->

//-----------Title: Param destructuring-----------
// const person={
//     name:"Akhil",
//     age:21
// }
// function details(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);       ------this will give undefined------
// }
// details(person);
//-----------OR------------
// function details({name:x,age:y,gender}){       ------this is parameters destructing by using {}------
//     console.log(x);
//     console.log(y);
//     console.log(gender);
// }
// details(person);



// <--------------File_54---------------->

//-----------Title: Callback function-----------
// function fun2(name){
//     console.log("inside function 2");
//     console.log("the name is",name);
// }
// function fun(callback){       ------you can use any name instead of callback but callback is a convention------
// console.log("this is function 1");
// callback("akhil");
// }
// fun(fun2);



// <--------------File_55---------------->

//-----------Title: Function returning function-----------
//  function fun(){  
//     return function hello(){
//         return "hello world";
//     };
//  }
// const ans = fun();
// console.log(ans());



// <--------------File_56---------------->

//-----------Title: ForEach method-----------
// const num=[4,5,6,7,8];
// function fun(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// }
// for(let i=0;i<5;i++){
//     fun(num[i],i);
// }
//----------OR----------
// num.forEach(fun);       ------forEach use a array and enter all values in a function------
//-----Task...
// const even = x => console.log(`${x} -> ${x%2===0}`);
// num.forEach(even);
// num.forEach(function(i){console.log(i**2);});

// user=[
//     {fname:"akhil",age:23},
//     {fname:"smriti",age:21},
//     {fname:"shruti",age:22},
// ]
// user.forEach(user => {
//     console.log(user.fname,user.age);
// });
//----------OR-----------
// for(let x of user){
//     console.log(x.fname);
// }



// <--------------File_57---------------->

//-----------Title: Map method-----------
// const num=[4,5,6,7,8,9];
// const square = function(num){
//     return num*num;
// }
// const newArr= num.map(square);       ------map return an array which include every element as an argument for a function------
// console.log(newArr);
//----------OR----------
// const newArr = num.map(x=>x**2);
// console.log(newArr);



// <--------------File_58---------------->

//-----------Title: Filter method-----------
// const num=[1,2,3,4,5,6,7,8,9];
// const evenNum=num.filter(x=>x%2===0);       ------this will use argument and make a new array with function, also function should give only 1 or 0------
// console.log(evenNum);

//-----task...
// const product=[
//     {pId: 1, pName: "P1", price: 3000},
//     {pId: 2, pName: "P2", price: 4500},
//     {pId: 3, pName: "P3", price: 20000},
//     {pId: 4, pName: "P4", price: 300},
//     {pId: 5, pName: "P5", price: 32000}
// ]
// const ans = product.filter(element=>element.price<10000);
// console.log(ans);



// <--------------File_59---------------->

//-----------Title: Reduce method-----------
// const num=[1,2,3,4,5];
// const sum=num.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;
// });
// console.log(sum);
// first time accumulator is arr[0] and currentvalue is arr[1] and then accumulator is return of its and currentvalue
// and current value is next element of array and accumulator and currentvalue are just convention
//pass          accumulator         currentvalue            return
// 1                1                   2                      3
// 2                3                   3                      6
// 3                6                   4                      10
// 4                10                  5                      15

// const userCart = [
//     {pId:1 , name:"moblie", price: 12000},
//     {pId:1 , name:"tab", price: 15000},
//     {pId:1 , name:"laptop", price: 30000}
// ]
// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// },0)       ------here 0 is default value of accumulator------
// console.log(totalAmount);

// totalPrice          currentProduct                  return
//     0              {obj price of id1}               12000
// 12000              {obj price of id1}               27000
// 27000              {obj price of id1}               57000



// <--------------File_60---------------->

//-----------Title: Sort method-----------
//----------Ascii code----------
// {
//     "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
//     "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
//     "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
//     "46": ".",     "47": "/",     

//     "48": "0",     "49": "1",     "50": "2",     "51": "3",     "52": "4",     
//     "53": "5",     "54": "6",     "55": "7",     "56": "8",     "57": "9",     

//     "58": ":",     "59": ";",     "60": "<",     "61": "=",     "62": ">",     "63": "?",     "64": "@",     

//     "65": "A",     "66": "B",     "67": "C",     "68": "D",     "69": "E",     
//     "70": "F",     "71": "G",     "72": "H",     "73": "I",     "74": "J",     
//     "75": "K",     "76": "L",     "77": "M",     "78": "N",     "79": "O",     
//     "80": "P",     "81": "Q",     "82": "R",     "83": "S",     "84": "T",     
//     "85": "U",     "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    

//      "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    "96": "`",     

//     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
//     "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
//     "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
//     "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
//     "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
//     "121": "y",    "122": "z",

//     "123": "{",    "124": "|",    "125": "}",    
//     "126": "~",    "127": ""
// }

// const num=[5,9,1200,410,3000];
// num.sort();
// console.log(num);       //------ans is [1200, 3000, 410, 5, 9] because sort treat numbers as string and sort them as their ascii value------
// -----['5','9','1200','410','3000']
// -----[53, 57,  49,    52,   51]       ------their ascii value but in alphabet they sort like dictionary------

// const alp = ["akhil","mahesh","smriti","Akhil"];
// alp.sort();
// console.log(alp);

//-----task...
// const num=[5,9,1200,410,3000];
// let e = num.sort((a,b)=>a-b);
// console.log(e);
// console.log(num);

// -----1200,410
// -----a-b ---> 790
// -----a-b ---> positive   ---> b,a
// -----first we will put b (400) and then a (1200)

// -----5,9
// -----a-b ---> -4
// -----a-b ---> negative   ---> a,b
// -----first we will put a (5) and then b (9)

//-----task...
// const product=[
//     {pId: 1, pName: "P1", price: 3000},
//     {pId: 2, pName: "P2", price: 4500},
//     {pId: 3, pName: "P3", price: 2000},
//     {pId: 4, pName: "P4", price: 300},
//     {pId: 5, pName: "P5", price: 32000}
// ]
// const lowToHigh = product.slice(0).sort((a,b)=>a.price-b.price);
// const highToLow = product.slice(0).sort((a,b)=>b.price-a.price);
// console.log(lowToHigh);
// console.log(highToLow);



// <--------------File_61---------------->

//-----------Title: Find method-----------
// const arr=["helloworld","world","akhilnegi","scotch"];
// const ans = arr.find(string=>string.length===5);       ------find use a function to know what to find------
// console.log(ans);

//-----task...
// const product=[
//     {pId: 1, pName: "P1", price: 3000},
//     {pId: 2, pName: "P2", price: 4500},
//     {pId: 3, pName: "P3", price: 20000},
//     {pId: 4, pName: "P4", price: 300},
//     {pId: 5, pName: "P5", price: 32000}
// ]
// const info = product.find(s=>s.pId===3);
// console.log(info);



// <--------------File_62---------------->

//-----------Title: Every method-----------
// const arr=[2,4,6,8,10];
// const arr2=[2,5,6,8,10];
// console.log(arr.every(num=>num%2===0));       ------this will give true because every element is even or fulfil the function------
// console.log(arr2.every(num=>num%2===0));       ------every function check every element with the function inside it------

//-----task...
// const product=[
//     {pId: 1, pName: "P1", price: 3000},
//     {pId: 2, pName: "P2", price: 4500},
//     {pId: 3, pName: "P3", price: 20000},
//     {pId: 4, pName: "P4", price: 300},
//     {pId: 5, pName: "P5", price: 32000}
// ]
// const ans = product.every(element=>element.price<10000);
// console.log(ans);       ------this will give false as not every element is less than 10000------



// <--------------File_63---------------->

//-----------Title: Some method-----------
//-----you can see every as and and some as or, if any number satisfy the function then it will show true-----
// const arr=[2,4,6,8,10];
// const arr2=[1,3,5,7,8];
// console.log(arr.some(num=>num%2===0));       ------this will give true because every element is even or fulfil the function------
// console.log(arr2.some(num=>num%2===0));       ------this will also true because one element satisfy the function------

//-----task...
// const product=[
//     {pId: 1, pName: "P1", price: 3000},
//     {pId: 2, pName: "P2", price: 4500},
//     {pId: 3, pName: "P3", price: 20000},
//     {pId: 4, pName: "P4", price: 300},
//     {pId: 5, pName: "P5", price: 32000}
// ]
// const ans = product.some(element=>element.price<1000);
// console.log(ans);       //------this will give false as not every element is less than 10000------



// <--------------File_64---------------->

//-----------Title: Fill method-----------
// const arr = new Array(10).fill(-1);
// console.log(arr);       ------this create an array having all element -1------

// const arr2 = [1,2,3,4,5,6,7,8,9];
// arr2.fill(0,2,5);       ------this will make 3,4,5 to 0------
//-----fill( value , start , end )
// console.log(arr2);



// <--------------File_65---------------->

//-----------Title: Splice method-----------
//-----this help in inserting and deleting a item or more than once from an array-----
// const arr=[1,2,3,4,5];
//-----delete
//-----splice( start , delete , insert )
// const deletedItem = arr.splice(1,1);
// console.log(deletedItem, arr);
//-----insert
// arr.splice(2,1,33);
// console.log(arr);



// <--------------File_66---------------->

//-----------Title: Iterables-----------
// -----iterables are jispr hum for of loop lga sake like string and array
// const fname="akhil";
// for(let i of fname){
//     console.log(i);
// }
// const num=[1,2,3,4,5,6,7,8];
// for(let i of num){
//     console.log(i);
// }
// const obj={
//     fname:"akhil",
//     age:23;
// };
// for(let i of obj){
//     console.log(i);       ------this will give error as objects are not iterable------
// }

//-----array like object are jinke pas length property hoti hai aor jisko hum index se access kr skte hai like string



// <--------------File_67---------------->

//-----------Title: Set-----------
//-----it stores data and has its own method, order is not guaranted and index-based access not allowed, unique items only-----
// const num = new Set([1,2,3,4,5,6]);
// const items=["i1","i2","i3"];
// console.log(num);
// num.add(33);
// num.add(items);
// console.log(num);
// num.add(items);       ------you cannot add same array in set, so this will not add------
// console.log(num);
// num.add(["a1","a2"]);
// num.add(["a1","a2"]);       ------but you can add same array like this because they both have different address------
// console.log(num);
// if(num.has(3)){       ------has chech wether the element is in that set and return true or false------
//     console.log("yesss");s
// }
// const arr=[1,2,3,2,4,5,1,3];
// const newArr = Array(...(new Set(arr)));
// console.log(Array.isArray(newArr));       //------this will remove all repeted elements------
// console.log(newArr);
// console.log(newArr.length);



// <--------------File_68---------------->

//-----------Title: Maps data structure-----------
// const person={
//     fname : "Akhil",
//     age:7,
//     1:"one"
// }              //------these are object literal, and keys always be string or symbol, here 1 is a string not number------
// for (let key in person){
//     console.log(key);
// }

//------Maps are constructed like this------
// const person = new Map();
// person.set("fname","Akhil");
// person.set("lname","Negi");
// person.set(1,"one");
// person.set([1,2,3],"onetwothree");
// person.set({1:"one",2:"two",3:"three"},"abcd");
// console.log(person);
//------Map is a type of object which can use numbers or array or object as a key------
//------Also maps are iterables------

// console.log(person["fname"]);       //------this or person.fname will not work in maps------
// console.log(person.get("fname"));       //------this will show fname------
// console.log(person.get(1));       //------this will show one but here 1 is number not a string------
// console.log(person.keys());       //------this will show all the keys------

// for(let key of person){
// console.log(key);
// console.log(Array.isArray(key));
// }       //------this will show array which include key and value------

// for(let key of person){
//     console.log(key[0]);
//     console.log(typeof key[0]);
// }       //------as key is an array we can get key of map as well as value of map by key[1] and also the typeof key show that keys can be number or array or object in map------

// for(let [key ,value] of person){       //------as we know of give an array here we destructure the array------
// console.log(key,value);
// }

// for(let key of person.keys()){
//     console.log(key);
// }       //------this will show keys of map------

//------you can also construct map like this------
// const person = new Map([["fname","Akhil"],["lname","negi"],[1,"one"]]);
// console.log(person);

//-----task...
// const person1={
//     id:1,
//     name:"Akhil"
// }
// const person2={
//     id:2,
//     name:"Smriti"
// }
// const extraInfo = new Map();
// extraInfo.set(person1,{age:21,gender:"male"})
// extraInfo.set(person2,{age:19,gender:"female"})
// console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).age);



// <--------------File_69---------------->

//-----------Title: Clone using Object.assign-----------
// const obj1={
//     name:"Akhil",
//     age:21
// }
// const obj2=obj1;       //------this is not good because if we change something in obj1 or obj2 the other will get change as both obj1 and obj2 pointing in same object------
// const obj2 = {...obj1};       //------this is one method of cloning------
// const obj2 = Object.assign({},obj1);       //------this is other method of cloning but its an old method------
// obj1.gender="male";
// console.log(obj1);
// console.log(obj2);



// <--------------File_70---------------->

//-----------Title: Optional chaining-----------
// const user = {
//     fname:"Akhil",
//     add:{hNo:"1234"}
// }
// let user2;
// console.log(user.fname);
// console.log(user.add.hNo);       //------they will work finely------
//console.log(user.city.current);       //------hence city does not there in object so this will show error but we want undefined instead of eoor because that will stop whole program------
// console.log(user?.city?.current);       
// console.log(user2?.fname);       //------this ques mark will ask if that data is there or not, if it is there the data will show and if not it will show undefined nor show error------    



// <--------------File_71---------------->

//-----------Title: Methods-----------
//------methods are function inside object------
// const person={
// fname:"Akhil",
// age:21,
// about:function(){
//     console.log(this);       //------this keyword indicate the object which called the method------
//     console.log(`Name is ${this.name} and age is ${this.age}`);
//     console.log(`Name is ${fname} and age  is ${age}`);       //------this will give error as this keyword is not there------
//     }
// }
// console.log(person.name);
// console.log(person.about);
// person.about();

//-----Task...
//------this task will tell what this keyword indicate------
// function tell(){
//     console.log(`The name is ${this.fname} and age is ${this.age}`);
// }
// const person1={
//     fname:"Akhil",
//     age:21,
//     about:tell
// }
// const person2={
//     fname:"Smrit",
//     age:11,
//     about:tell
// }
// const person3={
//     fname:"subham",
//     age:1,
//     about:tell
// }
// person1.about();
// person2.about();
// person3.about();



// <--------------File_72---------------->

//-----------Title: Window-----------
//------if we print this then it will show window object of browser,and any function define in js file is saved in window object------
//------so we use "use strict" so that this will show undefined not window object which prevent errors ------
// console.log(this);
// console.log(window);       //------this indicate window object so both give same result------
// function myFunc(){
//     "use strict"       //------using use strict, only myFunc will give undefined not window.myFunc because myFunc is saved in window object and now we are calling by window object------
//     console.log(this);
// }
// myFunc();       //------this will give window object------
// window.myFunc();       //------this will also give window object as myFunc function is saved in windows object------



// <--------------File_73---------------->

//-----------Title: Call, apply, bind-----------
// function hello(){
//     console.log("Hello Smriti");
// }
// hello.call();       //------call function can be used in calling function------

// function tell(gender){
//     console.log(this.fname,this.age,gender);
// }
// const user1 ={
//     fname:"Akhil",
//     age:21,
//     about: function(hobby,city){
//         console.log(this.fname,this.age,hobby,city);
//     }
// }
// const user2={
//     fname:"Smriti",
//     age:20,
// }
//------now if i have to use about method for user2 then i will pass user2 to call function------
// user1.about.call(user2);       //------user1 called about function but argument inside call tell what is "this" here------
// user1.about.call()       //------this will show undefined because we not tell what is this here------
// user1.about.call(user2,"gym","meerut");       //------argument is given like this------
// tell.call(user2,"female");       //------you can use function declared outside the object------

//------apply is same as call, just we give argument inside an array and bind give us a function which we can call to execute the code------
// user1.about.apply(user2,["gym","meerut"]);
// const func=tell.bind(user1,"male");
// func();



// <--------------File_74---------------->

//-----------Title: Mistake usually done-----------
// const user1={
//     fname:"Akhil",
//     age:8,
//     about:function(){
//         console.log(this.fname,this.age);
//     }
// }
// const myfunc = user1.about;
// myfunc();       //------this will show undefined as upper line just copy the code of about so when calling myfunc we do not have "this", so we use bind here------



// <--------------File_75---------------->

//-----------Title: Arrow function-----------
//------arrow function's this is one level upper object and we cannot change its this using call function------
// const user1={
//     fname:"Akhil",
//     age:8,
//     about:()=>{
//         console.log(this);       //------here this is window, one level up object------
//         console.log(this.fname,this.age);
//     }
// }
// user1.about();
// user1.about.call(user1);       //------both give undefined------



// <--------------File_76---------------->

//-----------Title: Short keyword-----------
// const user1={
//     fname:"Akhil",
//     age:21,
//     about(){       //------this is same as writing about:function(){},just a short hand------
//         console.log(this.fname,this.age);
//     }
// }
// user1.about();



// <--------------File_77---------------->

//-----------Title: Create function to create multiple objects-----------
// function createUser(fname,lname,age,gender){
//     const user={};
//     user.fname=fname;
//     user.lname=lname;
//     user.age=age;
//     user.gender=gender;
//     user.about=function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`;
//     };
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }

// const user1 = createUser("Akhil","Negi",21,"Male");
// console.log(user1);
// const about=user1.about();
// console.log(about);
// console.log(user1.is18());



// <--------------File_78---------------->

//-----------Title: Store method in different object-----------
//------We will store method in different object so that whenever we make a user object the methods will not copy again and again, by this we are saving our memory------

// const usermethods={
//     about(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`;
//     },
//     is18(){
//         return this.age>=18;
//     }
// }
// function createUser(fname,lname,age,gender){
//     const user={};
//     user.fname=fname;
//     user.lname=lname;
//     user.age=age;
//     user.gender=gender;
//     user.about=usermethods.about;
//     user.is18=usermethods.is18;
//     return user;
// }

// const user1 = createUser("Akhil","Negi",21,"Male");
// const user2 = createUser("Smriti","Negi",19,"Female");
// const about=user1.about();
// console.log(user1.about());
// console.log(user2.about());
// console.log(user1.is18());



// <--------------File_79---------------->

//-----------Title: Inheritance of object variable and methods using Object.create-----------
//------First read File_80------
// const usermethods={
//     about(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`;
//     },
//     is18(){
//         return this.age>=18;
//     },
//     sing(){
//         return "OO antava mama uu uu antava mama";
//     }
// }
// function createUser(fname,lname,age,gender){
//     const user=Object.create(usermethods);       //------because of this we do not have to add user.func=usermethods.func again, we can directly add method to usermethods------
//     user.fname=fname;
//     user.lname=lname;
//     user.age=age;
//     user.gender=gender;
//     user.about=usermethods.about;
//     user.is18=usermethods.is18;
//     return user;
// }

// const user1 = createUser("Akhil","Negi",21,"Male");
// const user2 = createUser("Smriti","Negi",19,"Female");
// console.log(user2.sing());



// <--------------File_80---------------->

//-----------Title: Object.create-----------
// const obj1={
//     key1:"value1",
//     key2:"value2",
// }
// const obj2={
//     key2:"value000",
//     key3:"value3",
// }
// console.log(obj2.key1);       //------if we want key1 from obj2 it will give undefined------

//------So we use Object.create and inside it we put the object which variable and methods we want to inherit------
// const obj1={
//     key1:"value1",
//     key2:"value2",
// }
// const obj2 = Object.create(obj1);
// obj2.key2="value000";
// obj2.key3="value3";
// console.log(obj2.key1);
// console.log(obj2.key2);
//------Now obj2 first check to itself for key 1 and 2 and then if not available it will go for obj1 variables------
//------__proto__ or [[prototype]]  ,prototype is different from both these ,will tell about variables and methods of parent or outer object------
// console.log(obj2);       //------here you can see [[Prototype]] written below the variables------
// console.log(obj2.__proto__)       //------__proto__ is a reference and prototype is a object------



// <--------------File_81---------------->

//-----------Title: Prototype-----------
//------in js functions can be treated as function and object both------
// function hello(){
//     console.log("Hello Smriti");
// }
// console.log(hello.name);       //------this will tell the name of the function------
//------you can add your own properties to function------
// hello.myOwnProperty = "This is simple hello program";
// console.log(hello.myOwnProperty);

//------function give us free space or you can say empty objects and that is called prototype------
// function hello(){
//     console.log("Hello Smriti");
// }
// console.log(hello.prototype);       //------here constructor is key and its value is hello function and only and only prototype is present in prototype------
// hello.prototype.abc = "abc";       //------this store in prototype------
// hello.xyz = "xyz";       //------upper thing is different from this------
// console.log(hello.prototype);
// console.log(hello.prototype.abc);       //------you can only get data by this------
// console.log(hello.xyz);
// hello.prototype.sing = function(){       //------you can add methids in prototype------
//     return"Laaalaaala";
// }
// console.log(hello.prototype.sing());



// <--------------File_82---------------->

//-----------Title: Use prototype for our object-----------
// function createUser(fname,lname,age,gender){
//     const user=Object.create(createUser.prototype);       //------here user will check to its prototype and now protortype object is is reference by __proto__, so we link __proto__ and prototype------
//     user.fname=fname;
//     user.lname=lname;
//     user.age=age;
//     user.gender=gender;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.fname} ${this.lname} is ${this.age} years old`;
// }
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// }
// createUser.prototype.sing = function(){
//     return "OO antava mama uu uu antava mama";
// }
// console.log(createUser.prototype);
// const user1 = createUser("Akhil","Negi",21,"Male");
// const user2 = createUser("Smriti","Negi",19,"Female");
// console.log(user1.about());



// <--------------File_83---------------->

//-----------Title: New keyword-----------
//------new keyword do three things: 1) it will create an empty object " this = {} "which we do in this code(const user=Object.create(createUser.prototype);)------
//------2) it will return "this" object------
//------3) it will link function prototype to to the function or you can say link prototype to reference __proto__ similar to code(Object.create(createUser.prototype))------

// function createUser(fname,age){
//     this.fname=fname;
//     this.age=age;
// }
// createUser.prototype.about = function() {
//     console.log(`Name is ${this.fname} and age is ${this.age}`);
// }
// const user1 = new createUser("Akhil",21);
// console.log(createUser.prototype);
// console.log(user1);
// user1.about();

//-----task...
// function CreateUser(fname,lname,age,gender){       //------this is a constructor function and according to convention first letter of name should be capital------
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
//     this.gender=gender;
// }
// CreateUser.prototype.about = function(){
//     return `${this.fname} ${this.lname} is ${this.age} years old`;
// }
// CreateUser.prototype.is18 = function(){
//     return this.age>=18;
// }
// CreateUser.prototype.sing = function(){
//     return "OO antava mama uu uu antava mama";
// }
// const user1 = new CreateUser("Akhil","Negi",21,"Male");
// const user2 = new CreateUser("Smriti","Negi",19,"Female");
// console.log(user1.about());
// console.log(user1.is18());



// <--------------File_84---------------->

//-----------Title: hasOwnProperty-----------
//------if we want to extract all the key of constructor except the one who are in prototype then we use this function------
//------for that uncomment the previous file from task only------
// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }



// <--------------File_85---------------->

//-----------Title: Array prototype-----------
// let num = new Array(1,2,3);       //------this will create array asusual and Array here is function so it has its own prototype------
// console.log(Array.isArray(Array.prototype));       //------but as we seen earlier prototype is object but here it is array------
// console.log(num);

// let num2=[4,5,6];
// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(num2));

// function hello(){
//     console.log("Hello Smriti");
// }
// console.log(hello.prototype);
// hello.prototype = [];       //------this change the prototype structure from object to array------
// console.log(hello.prototype);
// hello.prototype.push("3");
// console.log(hello.prototype);



// <--------------File_86---------------->

//-----------Title: Class-----------
//------classes are started from 2015/es6 and in js class are fake because we just doing the same work like we made counstructor function but in organised manner------
// class CreateUser{
//     constructor(fname,lname,age,gender){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//         this.gender=gender;
//     }
//     about(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`;
//     }
//     is18(){
//         return this.age>=18;
//     }
//     sing(){
//         return "OO antava mama uu uu antava mama";
//     }
// }
// const user1 = new CreateUser("Akhil","Negi",21,"Male");
// const user2 = new CreateUser("Smriti","Negi",19,"Female");
// console.log(user2.fname);
// console.log(user1.about());
// console.log(user2.is18());
// console.log(Object.getPrototypeOf(user1));



// <--------------File_87---------------->

//-----------Title:Class practice and extends keyword-----------
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }   
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const animal1 = new Animal("tom",2);
// console.log(animal1.name);
// console.log(animal1.eat());

// class Dog extends Animal{}
// const tommy = new Dog("tommy",1);
// console.log(tommy.isSuperCute());



// <--------------File_88---------------->

// <--------------File_Super keyword---------------->
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }   
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);       //------here super is the parent class and we told here that first two arguments are name and age------
//         this.speed=speed;
//     }
//     eat(){
//         return `Modified eat: ${this.name} is eating`;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed} kmph`;
//     }
// }
// const tommy = new Dog("tommy",1,30);
// console.log(tommy.run());
// console.log(tommy.eat());



// <--------------File_89---------------->

//-----------Title: Nothing new-----------
//------move to next file------



// <--------------File_90---------------->

//-----------Title: Getter and setters-----------
// class Person{
//     constructor(fname,lname,age){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//     }
//     get fullName(){       //------you can call fullname without parenthesis, as a variable------
//         return `${this.fname} ${this.lname}`;
//     }
//     setName(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
//     }
//     set fullName(fullName){
//         const [fname,lname] = fullName.split(" ");
//         this.fname=fname;
//         this.lname=lname;
//     }
// }
// const person1 = new Person("Akhil","Negi",21);
// console.log(person1.fullName);
// person1.setName("Smriti","Sharma");
// console.log(person1.fullName);
// person1.fullName = "Akhil Negi";
// console.log(person1.fullName);



// <--------------File_91---------------->

//-----------Title: Static methods and properties-----------
// class Person{
//     constructor(fname,lname,age){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//     }
//     static classInfo(){
//         return "This is person class";
//     }
//     static prop = "this is a property";
//     get fullName(){       
//         return `${this.fname} ${this.lname}`;
//     }
//     set fullName(fullName){
//         const [fname,lname] = fullName.split(" ");
//         this.fname=fname;
//         this.lname=lname;
//     }
// }
// const person1 = new Person("Akhil","Negi",21);
// console.log(Person.classInfo());       //------here classInfo is a static function so it is called by class not object(instance)------
// console.log(Person.prop);



//---------------------------------------THANK YOU---------------------------------------