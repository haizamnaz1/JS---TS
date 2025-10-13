//single elemant selector and multi elemant selector

//single elemant selector
console.log(document.getElementById("contact-form"));
console.log(document.querySelector(".container"));  //for single elemant selector
console.log(document.getElementsByClassName("form-group")); //for multiple elemant selector

const items =document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); //for multiple elemant selector

//manipulating the DOM
const ul = document.querySelector('.items');
//ul.remove(); -- removes the elemant
//ul.lastElementChild.remove(); -- removes the last elemant
ul.firstElementChild.textContent = "hello"; //changes the text of first elemant
ul.children[1].innerText = 'Brad';  //changes the text of second elemant
ul.children[2].innerHTML =  '<h1>hello</h1>';   //changes the text of third elemant to h1

const btn = document.querySelector('.btn');
btn.style.background= 'red'; //changes the background color of button