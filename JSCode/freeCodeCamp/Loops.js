/*--------------- Basic JavaScript: Iterate with JavaScript For Loops
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray will now contain [0,1,2,3,4]. -------------*/


// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

// You should be using a for loop for this.

// myArray should equal [1,2,3,4,5].


/* -------------------------------------------------------------- */


// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];
for (var i = 1; i < 11; i += 2) {
  myArray.push(i);
}


// You should be using a for loop for this.
// myArray should equal [1,3,5,7,9].



/* -------------------------------------------------------------- */


// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// should be a for loop
// should use a push
// should get [9, 7, 5. 3. 1]


/* -------------------------------------------------------------- */


// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// total should be declared and initialized to 0
// total should equal 20
// You should use a for loop to iterate through myArr
// Do not set total to 20 directly


/* -------------------------------------------------------------- */



function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


// multiplyAll([[1],[2],[3]]) should return 6
// multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
// multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) should return 54



/* -------------------------------------------------------------- */



// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
  myArray.push(i);
  i++;
} while (i < 11)


// You should be using a do...while loop for this.
// myArray should equal [10].
// i should equal 11




/* -------------------------------------------------------------- */
//  PROJECT

/* -------------------- 
Profile Lookup

We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties of a contact found to match name then return "No such property"

------------------------- */

//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
if (contacts[i].firstName === name) {
  if (contacts[i].hasOwnProperty(prop)) {
    return contacts[i][prop];
  } else {
    return "No such property";
  }
}
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");



// "Kristian", "lastName" should return "Vos"
// "Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
// "Harry","likes" should return an array
// "Bob", "number" should return "No such contact"
// "Bob", "potato" should return "No such contact"
// "Akira", "address" should return "No such property"



/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */




/* -------------------------------------------------------------- */