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