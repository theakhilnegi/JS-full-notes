// Notes will be here in points:-

// 1) <script src="./file.js"></script>, if we put this in top or bottom the html filw will first parse command in html and then load then execute that will take a lot of time, so we use 
// <script src="./file.js" async></script>, async keyword will make parsing and loading of js file at same time but it will execute when loading done irrespective of parsing, so the best is 
// <script src="./file.js" defer></script>, defer keyword will parse html code and load js file simultaniously and execute js after parsing is done 
// 2) -----console.dir(window.document); OR console.dir(document);----- to watch functions of window object or any object
//---------------------------------------------------------------

//-----------Title: Selection of tag-----------
// console.log(typeof document.getElementById("main-heading"));       //------this show that the html format we get is an object------
// const mainHeading = document.getElementById("main-heading");       //------this is selecting by id------
// const mainHeadingOther = document.querySelector("#main-heading");       //------this is selecting by queryselector but it will show only first item if class is appear in more than one tag------
// const navItem = document.querySelectorAll(".nav-item");       //------this will select all tag which contain that particular class------
// console.log(navItem);
//---------------------------------------------------------------

//-----------Title: Change the text in html-----------
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent);       //------this will give all the text inside that tag including if somthing is hidden------
// console.log(mainHeading.innerText);       //------this will not show the hidden items like hello in this example------
// mainHeading.textContent = "Hii Akhil";       //------you can change the text by this------
// console.log(mainHeading.textContent);
//---------------------------------------------------------------

//-----------Title: Change of style of elements-----------
// const mainHeading = document.querySelector("div.headline h2");       //------by herarchy of class and tag you can select a particular tag------
// console.log(mainHeading.style);       //------this will gice an object which contain all possible style function------
// mainHeading.style.backgroundColor = "blue";       //------this change the style of text, we use background-color keyword in css but its error in js, so we camel ase all attribute in js------
// mainHeading.style.border = "20px solid green";       //------this change border stlye------
//---------------------------------------------------------------

//-----------Title: Get and Set attribute-----------
// const link = document.querySelector("a");       
// console.log(link.getAttribute("href").slice(1));       //------this will get attribute data of selected tag------
// link.setAttribute("href","https://google.com");       //------this change attribute from home to google link------
// console.log(link.getAttribute("href"));
// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));
//---------------------------------------------------------------

//-----------Title: Get multiple elements using getElement and querySelector-----------
// const navItems = document.getElementsByClassName("nav-item");       //------this will give all tag by this class------
// console.log(navItems);       //------the given data is HTMLCollection which is array like object but not array, means you can use indexing and length property but not all functions of array------
// console.log(navItems[0]);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item")       //------this will give NodeList and thats also array like object but not array and differecnt form HTMLCollection------
// console.log(navItems[1]);
//---------------------------------------------------------------

//-----------Title: Loops-----------
//------you can use simple for loop, for of loop, but not forEach loop, but you can convert HTMLCollection to array to use forEach loop------
// let navItems = document.getElementsByTagName("a");       //------we use let because we will result change to array------
// console.log(navItems);
// for (let i = 0; i < navItems.length; i++) {
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";    
//     navItem.style.fontWeight = "bold";    
// }
// for(let navItem of navItems){
//     console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";    
//     navItem.style.fontWeight = "bold";    
// } 
// navItems = Array.from(navItems);       //------this convert HTMLCollection to array------
// console.log(Array.isArray(navItems));
// navItems.forEach(navItem => {
//     console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";    
//     navItem.style.fontWeight = "bold";    
// });
//------in nodeList you can use simple for loop, for of loop,forEach loop and also cange it into array like we done previously------
//---------------------------------------------------------------

//-----------Title: cTML-----------
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1> Inner html changed</h1>";
// console.log(headline.innerHTML);
// headline.innerHTML += "<button class=\"btn btn-headline\">Learn More</button>";
// console.log(headline.innerHTML);
//---------------------------------------------------------------

//-----------Title: DOM-----------
//------browser connect to js with document object and its the root object, if you have root object then you can traverse to anywhere ------
// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);
// const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes);       //------this will give three element--> head, text(it contain \n and space used), body------
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.nextSibling);       //------this will give #text which is nextline and space------
// console.log(headElementNode.nextElementSibling);       //------this will exclude text and only give element tag------
// console.log(bodyElementNode.parentNode);       //------you can traverse to parent also------
// console.log(document.body);       //------this select the body element directly------
// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title")       //------you can use queryselector to emement also, that will search under that element only------
// console.log(title.childNodes);
// const container = document.querySelector(".container");
// console.log(container.children);       //------this will give only element node not #text------
//---------------------------------------------------------------

//-----------Title: Classlist-----------
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);       //------this will give all classes attached with section-todo------
// sectionTodo.classList.add("bg-dark");       //------this will add bg-dark class to section-todo------
// sectionTodo.classList.remove("container");       //------this will add bg-dark class to section-todo------
// const ans = sectionTodo.classList.contains("bg-dark");       //------this tell whether a class in there or not------
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark");       //------if there is bg-dark class then it will remove it and if not then it will add it------
//---------------------------------------------------------------

//-----------Title: Add new HTML element to page-----------
// const todList = document.querySelector(".todo-list");
// console.log(todList.innerHTML);
// todList.innerHTML += "<li>New todo</li>";
// todList.innerHTML += "<li>teach student</li>";       //------we not use todo keyword because developer write todo at starting to leave that task for a while and come again to complete it------
//------we should not use this for add element because after adding the browser parse the wholw page again and it will take time, this feature is used when you have to change a lot of html------
//---------------------------------------------------------------

//-----------Title: Add element-----------
//------rather the previous option we use document.createElement() to append,prepend,remove element------
// const newTodItem = document.createElement("li");
// newTodItem.textContent = "Teach Teacher";
// const newTodItem2 = document.createElement("li");
// newTodItem2.textContent = "Teach Teacher2";
// const todList = document.querySelector(".todo-list");
// todList.append(newTodItem);       //------append add at last ot bottom------
// todList.prepend(newTodItem2);       //------prepend add at the top or starting------
// console.log(newTodItem);
// const tod1 = document.querySelector(".todo-list li");
// tod1.remove();
// console.log(tod1);
//---------------------------------------------------------------

//-----------Title: Before, after-----------
// const newTodItem = document.createElement("li");
// newTodItem.textContent = "Teach Teacher";
// const newTodItem2 = document.createElement("li");
// newTodItem2.textContent = "Teach Teacher 2";
// const todList = document.querySelector(".todo-list");
// todList.after(newTodItem);
// todList.before(newTodItem2);
//---------------------------------------------------------------

//-----------Title: Elem.insertAdjacentHTML(where, html)-----------
// const todList = document.querySelector(".todo-list");
// todList.insertAdjacentHTML("beforeend","<li>Teach student beforeend</li>")
// todList.insertAdjacentHTML("afterend","<li>Teach student afterend</li>")
// todList.insertAdjacentHTML("beforebegin","<li>Teach student beforebegin</li>")
// todList.insertAdjacentHTML("afterbegin","<li>Teach student afterbegin</li>")
//---------------------------------------------------------------

//-----------Title: Clone nodes-----------
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New list item";
// ul.append(li);
// ul.prepend(li);       //------this is written after append so only prepend will work nor apend------
//------either we can create another element node or clone this------
// const li2 = li.cloneNode(true);       //------if we do not fil any argument inside cloneNode it will not take text content, so we write true to deep clone all things------
// ul.append(li2)
//---------------------------------------------------------------

//-----------Title: Old methods for IE support-----------
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".first-todo");
//------run these methods one by one------
// ul.appendChild(li);       //------this will append the clild------
// ul.insertBefore(li,referenceNode);       //------this will insert before the reference node we created------
// ul.replaceChild(li,referenceNode);       //------this will replace the existing node with our node------
// ul.removeChild(referenceNode);       //------this will remove the reference node------
//---------------------------------------------------------------

//-----------Title: Static list vs live list-----------
//------querySelector give static list but getElementBySomething give live list------
// const listItems = document.querySelectorAll(".todo-list li");       //------Nodelist which is static------
// const sixthli = document.createElement("li");
// sixthli.textContent = "sixth list item";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthli);
// console.log(listItems);       //------this will give only five items but we have added one more item to five items, so Nodelist(by querySelector) is static list and does not change after adding by this method------

// const ul = document.querySelector(".todo-list");
// const li = ul.getElementsByTagName("li");       //------this will search only in selected ul------
// const sixthli = document.createElement("li");
// sixthli.textContent = "sixth list item";
// ul.append(sixthli);
// console.log(li);       //------this will give six items and we have added one more item to five items, so HTMLCollection(by getElementByTagName) is live list and change after adding by this method------
//---------------------------------------------------------------

//-----------Title: Get dimention of element-----------
// const sectiontodo = document.querySelector(".section-todo");
// const info = sectiontodo.getBoundingClientRect();       //------this will give all dimentions------
// const height = sectiontodo.getBoundingClientRect().height;       //------this will give only height------
// console.log(info);
// console.log(height);
//---------------------------------------------------------------

//-----------Title: Intro to events-----------
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",()=>{
//     console.log("clicked me!!!!");
// })
//---------------------------------------------------------------

//-----------Title: This keyword inside eventListener callback-----------
//------in case of normal fucntion or anonymus function this will be the button or other tag which call that function------
//------but in case on arrow function, this will indicate one level up which is window(mostly)------
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("this is anoymus function and this-->",this);
// });
// btn.addEventListener("click",()=>{
//     console.log("this is arrow function and this-->",this);
// });
//---------------------------------------------------------------

//-----------Title: Add event to multiple button-----------
// const allButton = document.querySelectorAll("button");
// console.log(allButton);
// for(let button of allButton){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }       //------you can use for of loop, normal for loop and also forEach loop------
// allButton.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// })
//---------------------------------------------------------------

//-----------Title: Event object-----------
//------whenever we add event listener to element js engine execute code line by line and browser run js engine plus webapi(some web application)------
//------when brower kmow an event is triggered it call the respective function and send data of event as an argument,or you can say it give a callback function to js engine ------
//------and with callback function it give its information in a form of object------
// const LearnButton = document.querySelector(".btn-headline");
// LearnButton.addEventListener("click",function(e){       //------e or event contain all information browser give to js engine about event------
//     console.log(e);
// })
// LearnButton.addEventListener("click",(e)=>{
//     console.log(e.target);
// })       //------by this you get the same result as this keyword in normal function------
//---------------------------------------------------------------

// 3) Now this video is over, and for event bubbling and event capturing and event delegation, see harshit vashisth video at 0723hrs




//---------------------------------------THANK YOU---------------------------------------