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


//object literals 
const Person = { //object
    firstName: 'jhon',
    lastName: 'doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'], //array
    address: {  //nested object
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
};

Person.email = 'jhon@gmail.com'; //this will add email to the object

console.log(Person); //prints the object
console.log('this person is: '+ Person.firstName, Person.lastName); //prints the targetted values
console.log('this persons email is: '+Person.email); //prints the email


//arrays of objects
const todos = [ //array of objects
    {
        id : 1,
        text: 'Take Out Trash',
        isCompleted: false
    },
    {
        id : 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
        {
        id : 3,
        text: 'Dentist Appointment',
        isCompleted: true
    },
    {
        id : 4,
        text: 'play with kids', //lmoa we need reminders for this???
        isCompleted: false
    }
];

console.log(todos); //prints the array of objects
console.log(todos[1].text); //prints the text of the second object in the array

//converting to JSON
const todoJSON = JSON.stringify(todos); //converts the array of objects to JSON string
console.log(todoJSON); //prints the JSON string


//loops
//for loops
for(let i = 0; i <= 10; i++){ // for loop copndidiotn
    console.log('for loop number: ' + i); //prints the loop number
}

//while loop
let i = 0;
hi = 5; //initialization
while(i < hi) { //condiition
    console.log(`while loop number is: ${i}`); //prints the loop number
    i++; //increment
}

for(let i = 0; i < todos.length; i++){ // for loop copndidiotn
    console.log(todos[i].id, todos[i].text, todos[i].isCompleted);
}

//for of loop
for (let todo of todos) {
    console.log(todo.id, todo.text, todo.isCompleted);  
}


///high order array methods -- forEach, map, filter
//foreach
todos.forEach(function(todo) { //forEach method
    console.log(todo.text); //prints the text of each object in the array
});

//foreach
const todoText = todos.map(function(todo) { //map method
    return todo.text //prints the text of each object in the array
});

console.log(todoText); //prints the array of text

//filter

const todotext = todos.filter(function(todo) { //filter method
    return todo.isCompleted === true;//prints the text of each object in the array
}).map(function(todo) {
    return todo.text ; //prints the text of each object in the array
});

console.log(todotext);


//conditional statements
const a = 20;
const b = 10;

if(a > b && b < a) // && means and, || means or
    {
        console.log(`a is greater than b`);
    }

if (a == 20 || b == 10) {
    console.log('this statement is correct');
}

if(a === '10') { //== checks only value and  === checks value and type
    console.log('a is 10');
} 
else if (a > 10)
{   
    console.log('a is greater than 10');
}
else 
{
    console.log('a is less than 10');
}

//ternary operator
const c = 11;
const color = c > 10 ? 'red' : 'blue'; //if c is greater than 10 then color is red else color is blue
// '?' is the if and ':' is the else
console.log(color);
    //switch
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blur');
        break;
}