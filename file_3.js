// Notes will be here in points:-

//-----------Title: setTimeout-----------
//------javascript is a synchronous programming language, means it will first execute line 1 then line 2 then so on, this make website slow when we fetch some data from backend and website dont load till then-----
// console.log("script start");
// setTimeout(()=>{
//     console.log("inside settimeout");
// },1000);
// for (let i = 0; i  < 100; i++) {
//     console.log("...");
// }
// console.log("script end");
//------as js is synchronous language but here first script start print then ... then script end and at last inside settimeout------
//------this is done because setTimeout function is given to Web APIs provided by browser, and when all code execute then browser give function to callstack from callback queue------
// console.log("script start");
// const id = setTimeout(()=>{
//     console.log("inside settimeout");
// },1000);
// for (let i = 0; i  < 100; i++) {
//     console.log("...");
// }
// clearTimeout(id);       //------this function cancel the setTimeout function, so that will not execute------
// console.log("script end");
//---------------------------------------------------------------

//-----------Title: setInterval-----------
// console.log("script start");
// setInterval(()=>{       //------this will execute this function again and again after every minimun 1 second------
//     console.log(Math.random());
// },1000);
// console.log("script end");
//---------------------------------------------------------------

//-----------Title: Callback function-----------
// function getTwoNumAndAdd(num1,num2,callback){       //------example of callback function,you can insert more than one function and also arrow function------
//     if(typeof num1=="number" && typeof num2=="number"){
//         callback(num1,num2);
//     }
//     else{
//         console.log("wrong datatype");
//     }
// }
// function add(a,b){console.log(a+b);}
// getTwoNumAndAdd(4,6,add);
// getTwoNumAndAdd(4,"6",add);
//---------------------------------------------------------------

//-----------Title: callback hell and priramid of doom-----------
// setTimeout(()=>{
//     console.log("1");
//     setTimeout(()=>{
//         console.log("2");
//         setTimeout(()=>{
//             console.log("3");
//             setTimeout(()=>{
//                 console.log("4");
//             },3000);
//         },1000);
//     },2000);
// },1000);
//------this is setTimeout inside another setTimeout,called callback hell, nested timeouts, this is done to maintain order but it is not good todone like this so we use promise to do this job------
//------the below code is not link with html , so just read and analysis it------
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

//------this is callback hell------  
// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)
        
//       },1000)
      
//     },2000)
    
//   },2000)
  
// },1000)

// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
//   setTimeout(()=>{
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       if(onSuccessCallback){
//         onSuccessCallback();
//       }
//     }else{
//       if(onFailureCallback){
//         onFailureCallback();
//       }
//     }
//   },time)
// }
//------this is piramid of doom------
// changeText(heading1, "one","violet",1000,()=>{
//   changeText(heading2, "two","purple",2000,()=>{
//     changeText(heading3, "three","red",1000,()=>{
//       changeText(heading4, "four","pink",1000,()=>{
//         changeText(heading5, "five","green",2000,()=>{
//           changeText(heading6, "six","blue",1000,()=>{
//             changeText(heading7, "seven","brown",1000,()=>{
//               changeText(heading8, "eight","cyan",1000,()=>{
//                 changeText(heading9, "nine","#cda562",1000,()=>{
//                   changeText(heading10, "ten","dca652",1000,()=>{
                    
//                   },()=>{console.log("Heading10 does not exist")})
//                 },()=>{console.log("Heading9 does not exist")})
//               },()=>{console.log("Heading8 does not exist")})
//             },()=>{console.log("Heading7 does not exist")})
//           },()=>{console.log("Heading6 does not exist")})
//         },()=>{console.log("Heading5 does not exist")})
//       },()=>{console.log("Heading4 does not exist")})
//     },()=>{console.log("Heading3 does not exist")})
//   },()=>{console.log("Heading2 does not exist")})
// },()=>{console.log("Heading1 does not exist")})
//---------------------------------------------------------------

//-----------Title: Promise-----------
//------first we produce a promise for eg making friedrice, if we get the ingredient the resolve function is called and if not then reject is called------
// console.log("script start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];
// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })
//------the second task is consuming promise------
// friedRicePromise.then(       //------jab promise resolve hoga ------ 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })

// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)
// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }
// console.log("script end!!!!")
//------promise is also given to browser by js engine, but like setTimeout promise is not store in callback queue, it is stored in microtask queue which execute or move first to call stack after GEC complete------
//---------------------------------------------------------------

//-----------Title: Function returning promise-----------
// function ricePromise(){
//     const bucket = ['coffee', 'chips','vegetables','salt','rice'];
//     return new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })
// }
// ricePromise().then((myRice)=>{console.log(myRice.value,"are ready");}).catch((error)=>{console.log(error);})
//---------------------------------------------------------------

//-----------Title: Promise and setTimeout-----------
//------i want to resolve or reject promise after 2 sec------
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const flag = true;
//         setTimeout(()=>{
//         if(flag){
//             resolve("yes");
//         }
//         else{
//             reject("no");
//         }},2000)
//     })
// }
// myPromise()
//     .then((x)=>{console.log(x);})
//     .catch((y)=>{console.log(y);})
//---------------------------------------------------------------

//-----------Title: Promise resolving and promise chaining-----------
// const myPromise = Promise.resolve(5);
// Promise.resolve(5)
//     .then(value=>{
//         console.log(value);
//     })
//------this is promise resolving------
//------now we will see promise chaining, then method always return a promise------
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }
// myPromise()
//     .then((value)=>{
//         console.log(value);
//         value+="bee";
//         return value;       //------if no return written then "then" will return undefined------
//     }).then((value)=>{
//         console.log(value);
//         value+="negi;"
//         return value;
//     }).then((value)=>{
//         console.log(value);
//         value+="Ji;"
//         return value;
//     })
//---------------------------------------------------------------

//-----------Title: Callback hell to flat code-----------
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");
// function changeText(element,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             resolve();
//         }
//         else{
//             reject("Element not found");
//         }},time)   
//     })
// }
// changeText(heading1,"one","violet",1000)
//     .then(()=>changeText(heading2,"two","purple",2000))
//     .then(()=>changeText(heading3,"three","red",2000))
//     .then(()=>changeText(heading4,"four","pink",1000))
//     .then(()=>changeText(heading5,"five","green",2000))
//     .then(()=>changeText(heading6,"six","blue",3000))
//     .then(()=>changeText(heading7,"seven","cyan",1000))
//     .then(()=>changeText(heading8,"eight","yellow",500))
//     .then(()=>changeText(heading9,"nine","red",2000))
//     .then(()=>changeText(heading10,"ten","green",1000))
//     .catch((error)=>console.log(error))
//---------------------------------------------------------------

//-----------Title: AJAX : asynchronous javascript and XML-----------
//------XML is data format which we now do not use, nowadays we send HTTP request------
//------AJAX is a set of "web development techniques", using many web technologies on the "client-side ", to create asynchronous web applications.------
//------With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page------
//------We don't use data in XML format anymore. 
//------we use JSON now. 
//------we have 3 most common ways to create and send request to server
//------1.) xmlHTTPRequest (old way of doing)
//------2.) fetch API (new way of doing)
//------3.) axios (this is third party library)
//---------------------------------------------------------------

//-----------Title: XHR(XML HTTP request)-----------
//------uncomment console.log wisely------
//------Ready state-> 0 = UNSENT(client has been created, open() not called yet), 1 = OPENED(open() has been called), 2 = HEADERS_RECEIVED(send() has been called and headers and status are available)------
//------3 = LOADING(downloading, responseText holds partial data), 4 = DONE(operation is complete)------
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState);
// xhr.open("GET",URL)       //------this will take which type of request you want to make and api, and all these work done asynchronous------
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){       //------browser call this function whenever the readystate is changed------
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//          console.log(xhr.response);       //------when the operation is completed means readystate is 4, then we can use the response------
//         const response = xhr.response;
//         const data = JSON.parse(response);       //------the response we get is a json file, so we convert it into jasascript object------
//         console.log(data);
//     }
// }
// xhr.onload = function(){       //------this function will only run when readystate is 4, so we dont have to write above function------
//     const response = xhr.response;
//     const data = JSON.parse(response);       //------the response we get is a json file, so we convert it into jasascript object------
//     console.log(data);
// }
// xhr.send();
//---------------------------------------------------------------

//-----------Title: Error handling-----------
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload = ()=>{
//     if(xhr.status >=200 && xhr.status <300){
//         console.log(xhr.status);
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }
//     else{
//         console.log("something went wrong");
//     }
// }
// xhr.onerror = ()=>{
//     console.log("network error");
// }
// xhr.send();
//-----task...
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload = ()=>{
    //     if(xhr.status >=200 && xhr.status <300){
        //         console.log(xhr.status);
//         const data = JSON.parse(xhr.response);
//         const id = data[3].id;
//         const URL2 = `https://jsonplaceholder.typicode.com/posts/${id}`;
//         const post = new XMLHttpRequest();
//         post.open("GET",URL2);
//         post.onload = ()=>{       //------this seems to be llike callback hell, thats why mainly we use fetch------
//             const postData = JSON.parse(post.response);
//             console.log(postData);
//         }
//         post.send();
//     }
//     else{
    //         console.log("something went wrong");
    //     }
    // }
    // xhr.onerror = ()=>{       //------is any network error come this will execute by the browser------
//     console.log("network error");
// }
// xhr.send();
//---------------------------------------------------------------

//-----------Title: XHR using promise-----------
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const method = "GET";
// function sendRequest(method,url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = ()=>{
//             if(xhr.status>=200 && xhr.status<300){
//                 resolve(JSON.parse(xhr.response));
//             }
//             else{
//                 reject(new Error("something went wrong"));
//             }
//         }
//         xhr.onerror = ()=>{
//             reject(new Error("Network error"));
//         }   
//         xhr.send();
//     })
// }
// sendRequest(method,URL+"/1")
//     .then((value)=>{
//         console.log(value.id);
//         return sendRequest(method,URL+"/2")
//     })
//     .then((value)=>{
//         console.log(value.id);
//         return sendRequest(method,URL+"/3")
//     })
//     .then((value)=>{
//         console.log(value.id);
//         return sendRequest(method,URL+"/4")
//     })
//     .then((value)=>{
//         console.log(value.id);
//         return sendRequest(method,URL+"/5")
//     })
//     .then((value)=>{
//         console.log(value.id);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//---------------------------------------------------------------

//-----------Title: Fetch-----------
//------fetch will give a promise and do all work like we do in above promise but fetch reject only network connection error------
// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
//     .then(response=>{
//         if(response.ok){       //------this will give true if everything done well------
//             return response.json();       //------this will give a promise which can be resolve in next then------
//         }
//         else{
//             throw new Error("Something wents wrong");       //------this wiil throw error if status is not good------
//         }
//     })
//     .then(data=>{
//         console.log(data[3]);
//     })
//     .catch(error=>{
//         console.log("inside catch");
//         console.log(error);
//     })

//-----task...
// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL,{
//     method:"POST",
//     body: JSON.stringify({
//         title:"foo",
//         body:"bar",
//         userId: 1,
//     }),
//     headers:{
//         "Content-type": "aplication/json; charset=UTF-8",
//     },
// }).then(response=>{
//         if(response.ok){
//             return response.json();
//         }
//         else{
//             throw new Error("Something wents wrong");
//         }
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log("inside catch");
//         console.log(error);
//     })
//---------------------------------------------------------------

//-----------Title: Async Await-----------
// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
//     .then(res=>res.json())
//     .then(data=>console.log(data))

// ------using async keyword a function will return promise by fetch------
// async function getPosts(){
//     const response = await fetch(URL);       //------await wait for the data to be fetch------
//     if(response.ok){
//         const data = await response.json();
//         return data;
//     }
//     else{
//         throw new Error("Something went wrong");
//     }
// }
//------OR------
// const getPosts = async()=>{
//     const response = await fetch(URL);       //------await wait for the data to be fetch------
//     if(response.ok){
//         const data = await response.json();
//         return data;
//     }
//     else{
//         throw new Error("Something went wrong");
//     }
// }
// getPosts()
//     .then(mydata=>{
//         console.log(mydata);
//     })
//     .catch(error=>{
//         console.log("inside catch");
//         console.log(error);
//     })
//---------------------------------------------------------------

//-----------Title: ES6 modules-----------
//------for this goto module_practice folder------



//---------------------------------------THANK YOU---------------------------------------