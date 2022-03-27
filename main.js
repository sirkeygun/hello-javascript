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
/*
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
console.log(fruits, fruits.push('blackberries'), fruits); // appends
console.log(fruits[3]);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift(); // remove fisrt element
console.log(fruits);
fruits.unshift('ndizi'); // adds first element to an array
console.log(fruits);
let vegetables = ['asparagus', 'tomatoes', 'brocoli']
console.log(vegetables);
let allGroceries = fruits.concat(vegetables); // combine all array
console.log(allGroceries);
console.log(allGroceries.slice(2, 4)); // shows arrays from index 0 to 4 not including 5
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [3, 66, 23, 64, 92, 17, 58];
console.log(someNumbers.sort(function(a, b) { return a-b; })); // sort in acsending order
console.log(someNumbers.sort(function(a, b) { return b-a; })); // sort in decsending order

let emptyArray = new Array();
for (let num = 0; num <=18; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);
*/


// objects in javascript
// dictionaries in python
/*let student = {first: 'ngumo',
                last: 'kinyua',
                age: 12,
                height: 56,
                studentInfo: function () {
                    return this.first + '\n' + this.last + '\n' + this.age;
                }
            };
console.log(student.first);
console.log(student.last);
student.first = 'maina'; // change value from
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// conditionals control flows (if else)
// 18-35 is my target demograph

var age = prompt('whats your age');

if ((age>= 18) && (age<= 35)) {
    status = 'target demograph';
    console.log(status);
    alert('yes! you are my target demograph')
} else { 
    status = 'not my target demograph';
    console.log(status);
    alert('sorry! you are not within the target demograph')
} */

// switch statements
// differentiate between weekdays vs weekends
// day 0 --> Sunday
// day 6 --> Saturday -->
// day 4 --> Thursday --> weekday


const indicator = document.querySelector("[data-indicator]")

document.addEventListener("click", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    indicator.style.setProperty("--position", index)
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active")
    })
    anchor.classList.add("active")
  }
})



