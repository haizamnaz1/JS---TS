///alert('Hello world!'); //-- this is a popup window
console.log('hello world!')
console.error('this is an error')
console.warn('this is a warnming')

//var, let, const

let age = 30; // declares the variable
age = 31; // reassigns the variable
console.log(age); //prints the variable

//but if we use const
const birthyear = 1991;
console.log(birthyear); //birthyear cant be changed

//data types in JS
//string, Numbers, boolean, null, undefined.

const name = 'Jhon'; // this is a string 
const age1 = 31; // this is a number
const isCool = true; // this is a boolean
const rating = 4.5; // this is a number
const x = null; // this is a null -- basically empty value
const y = undefined; // this is an undefined -- value not assigned
let z; // this is also an undefined -- value not assigned

//checking the type of variable
console.log (typeof name + ' --for name');
console.log (typeof age1 + ' --for age');
console.log (typeof isCool + ' --for isCool');
console.log (typeof rating + ' --for rating');
console.log (typeof x + ' --for x');
console.log (typeof y + ' --for y');
console.log (typeof z + ' --for z');

//concatenation means joining two strings
//this is the old way of concatenation
console.log('my name is ' + name + ' and i am ' + age1 + ' years old')
//this is the new way of concatenation using template string aka template literals
console.log(`my anme is ${name} and i am ${age1} eyars old`)

//string properties and methods
const s = 'hellow world';
console.log(s.length); //mehtod to count length of string
console.log(s.toUpperCase()); //method to convert to upper case
console.log(s.toLowerCase()); //method to convert to lower case
console.log(s.substring(0,5)); //method to get substring
console.log(s.substring(0,5).toUpperCase()); //method to get substring and convert to upper case
console.log(s.split('')); //method to split string into array

//arrays - variables that hold multiple values

//array using constructor
const numbers = new Array(1,2,3,4,5); //array using constructor
console.log(numbers);

//array using literal
const fruits = ['apples', 'oranges', 'pears', 10, true]; //array using literal
console.log(fruits); //prints the array
console.log(fruits[1]); //[] -- this forcuses on the index of the array
fruits[5] = 'grapes'; //this will add grapes to the array

fruits.push('mangos'); //this will add mangos to the end of the array
fruits.unshift('strawberries'); //this will add strawberries to the beginning of the array
fruits.pop(); //removes the last element from the array

console.log(Array.isArray(fruits)); //this will check if the variable is an array or not
console.log(fruits.indexOf('oranges')); //this will return the index of the element