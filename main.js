// functions
// create a new function
/* function fun () {
  console.log('this is a function')
} */
// calling a function
// fun();

/* ----------------------------------------------------------------
example
]name  kinyua
function return kinyua
*/

// function greetings (yourName) {
// var result = 'hello' + ' ' + yourName;  // using string concatenation
// console.log(result);
// }

// var name = prompt('hello what is your name');
// greetings(name);

// taking arguments with functions
// adding two numbers together infunctions

/* function sumNumber (num1, num2) {
    var result = num1 + num2
    console.log(result);
} */

// sumNumber(10, 9)
// sumNumber('hello', ' kinyua')

/* while loops

var num1 = 0;

while (num1 < 1000) {
    num1 +=1;
    console.log(num1);
} */

// for loops
/* for (let num= 0; num < 100; num++) {
    console.log(num);
} */

// datatypes
/*
let yourAge = 18; //number
let yourName = 'kinyua'; // string
let name = {firstname: 'kevin', lastname:'kinyua'};// object
console.log(name);
console.log(yourAge)
let truth = false; // boolean
let grocery = ['nyanya', 'kitunguu']; //array
let random; // undefined
let nothing = null; // value null
*/
// string in js
/*
let fruit = 'banana, mango, apple, kiwi';
let moreFruit = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('k'));
console.log(fruit.slice(3, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(3));
console.log(fruit[3]);
console.log(fruit.split(',')); // split by coma
console.log(fruit.split('')); // split by character
*/
// arrays
let fruits = ['banana', 'mango', 'apple', 'kiwi'];
fruits = new Array ('banana', 'mango', 'apple', 'kiwi');

console.log(fruits[3]); // access values at index 2nd
fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// arrays common methods
console.log('to string/list', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.join('*'));
console.log(fruits, fruits.pop(), fruits); // removes last item
console.log(fruits, fruits.push('blackberries'), fruits); // adds
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('ndizi');
console.log(fruits);



