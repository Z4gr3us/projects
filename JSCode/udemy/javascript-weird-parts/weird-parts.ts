var a = 1 + '5';
console.log(a) 

var a = 1, b = '2';
console.log(a+b)

/* --Coercion - Javascript is dynamically typed. So it tends to write whatever you input. 'Coercion' in javascript engine happens by converting a value from one type to another. This happens a lot in Javascript because it is dynamically typed. -- */

console.log(3 < 2 < 1)
console.log(3 < 2)
console.log(false < 1)


/* -- Look at associativity (javascript operator precedence table - search for it in Google) for the answer to why the above is true. Essentially, it computes from left so, 3>2 is 'false' and false is coerced to 0 - so then we have 0 < 1 is then 'True'--*/

console.log(false == 0)
console.log(3 == 3)
console.log("" == false)


var a = 0;
var b = false;

if (a == b) {
    console.log('They are equal');
} else {
    console.log('Nope, not equal.');
}

/* -- If we change the (a == b) section to === we get 'Nope, not equal.' Why? Because of coercion and strict equality (or using Strict Inequlaity - !==) - LESSON -- first, in general, try to use, in your code, comparisons that you know are equivalent of that you know will be the same type. Secondly, in general, 99% of the time it will BEHOOVE you to use the '===' when making equality comparisons. Don't use '==' unless you explictily, unless you consciously, want to coerce the two values. --*/

function greet(name) {
    name = name || '<your name here>';
    console.log('Hello ' + name);
}
greet();

/* ----------------- Objects and Functions ---------------- */

var person = new Object();
person["firstname"] = "Shawn";
person["lastname"] = "Korhel";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.lastname)

console.log(person.firstname);
console.log(person.lastname);


person.address = new Object();
person.address.street = "111 Main st.";
person.address.city = "New York";
person.address. state = "NY";

console.log(person.address.street)

/* ----------------------------------------*/

// Object Literal is merely curly braces. It is the same thing as going - "var person = new Object()"

var Tony = { 
    firstname: 'She', 
    lastname: 'Hulk',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(Tony) {
    
}
greet(Tony);

greet({
    firstname: 'Mary', 
    lastname: 'Doe'
});

/* ---- BIG WORD ALERT - Namespace: a container for variables and funcitons -- Typically to keep variables and functions with the same name separate. Here's the problem, Javascript doesn't have namespaces? -----*/

var greet = 'Hello';
var greet = 'Hola';

console.log(greet);

var english = {
    greetings: {
        basic: 'Hello!'
    }
};
var spanish = {};

english.greet = 'Hello';
spanish.greet = 'Hola';

console.log(english);

/* ---------- People get confused between Object Literal and JSON String. They're two different things. JSON is more strict (quotes around the names etc.) -------------*/

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary", "isAPRogrammer": true}');

console.log(jsonValue);

/* ---------------------- Bubble Sort -------------------------------*/

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

console.log(bubbleSortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




/* ---------------- Functions are Ojects ----------------------*/


/* ---- BIG WORD ALERT - First Class Funcitons: Everything you can do with other types you can do with funcitons. Assign them to variables, pass them around create them on the fly. 

Two important hidden special properties of a Javascript Function:

1.) Name - optional, can be anonymous.
2.) Code - is a special property of the function. Meaning that the actual 'code' isn't 'the' function but merely a property of it.


/* ---- BIG WORD ALERT - Expression: A unit of code that results in a value. It doesn't have to be a variable.

-----*/
 

function greet() {          // Function statement
    console.log('hi');
}

var anonymousGreet = function() { // This is an expression which reults in a value;
    console.log('hi');
}

anonymousGreet();




function greet() {          // Function statement
    console.log('hi');
}

var anonymousGreet = function() { // This is an expression which reults in a value;
    console.log('hi');
}

anonymousGreet();


// passing a function to a funciton!? We're calling 'log' and passing a funciton using a function expression. So 'a' is now the funciton! Okay now, invoke your code with a();

function log(a) {
    a();
}

log(function() {
    console.log('hi');
});


/* ---------- CONEPTUAL ASIDE - By Value and By Reference - in both cases we're talking about variables. 

By Value:

a ------- 0x001 ------- Primitive Value - a has a location in momeory

let's suppose that we run:  b = a (or pass to a function)

b ------- 0x002 ------- Copy of Primitive Value - has a new location in memory 

---- Passing or setting equal one value to another by copying the value into two separate spots in memory --- 

------------

By Reference:

a -------- 0x001 --------- Object

let's suppose that we run:  b = a (or pass to a function)

b -------- 0x001 --------- Object

Both a and b have the same value so they look in the same area of memory. All objects interact by Reference when setting them equal to eachother or passing to a function. 

----------- */

// by value (primitives)

var a = 3;
var b;

b = a;
a = 2;
 
console.log(a);
console.log(b);
 

// by reference )all objects (including functions))

var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters))

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = { greeting: 'Howdy' };
console.log(c);
console.log(d);

// OBJECTS, FUNCTIONS, AND 'this'

/* ------- 

Execution Context is Created (CREATION PHASE)

When a function is invoked, a new Exectution Context is created and put on the execute stack. This is what happens when I run the code.

sections of an Exectuion Context:

1.) Variable Environment - Each Execution Context has this variable environment where the variables of that function live
2.) Outer Environment - It has a reference to it's outer environment; it's outer lexical environment.  Where it sits physically in the code. Which tells it how to look down the scopr chain.
3.) 'this' - Every time an Execution Context is created; every time a fucntion is run, it gives us this variable called 'this'.


-----------*/

function a() {
    console.log(this);
    this.newVariable = 'Hello';
}

var b = function() {
    console.log(this);
}

// a();

// console.log(newVariable);

b();


var c = {
    name: 'The c object',
    log: function() {
        this.name = 'Updated c object';
        console.log(this);

        var setname = function(newname) { // this function, you would think, would update the above 'name' but, IT DOESN'T because it is a newly execution context so it updates the Global (window) with the newly updated text. This is the way Javascript works. It's a quirk that many people think shouldn't work.
            this.name = newname;
        }
        setname('Update again! The c object');
        console.log(this);
    }
}

c.log();

// the way around the above weird part is this:

var c = {
    name: 'The c object',
    log: function() {
        var self = this; // at the very beginning of the function you create a variable that contains 'this'. now the variable 'self', via reference, will be popinting in the same area of memory that 'this' is ('this' pointing to the object). This way you can reference, with any funciton in any position, because of scope, Javascript will eventually find the variable 'self' which is pointing to the object.

        self.name = 'Updated c object';
        console.log(self);

        var setname = function(newname) { 
            self.name = newname;
        }
        setname('Update again! The c object');
        console.log(self);
    }
}

c.log();


/* ------------------- CONCEPTUAL ASIDE - ARRAY -------------------------*/

/* ----- 

Because Javascript is dynamically typed, Arrays are different. You can mix and match types of elements in strings in Javascript.

-------*/

var arr = [
    1,
    false,
    {
        name: 'Bill',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "Hello"
];

console.log(arr);
arr[3](arr[2].name) // say you want to reference the function and invoke (run) it and give it the name that is in the Array w/in the array? This is how.


// 'arguments' AND SPREAD

/* ------- 

Execution Context is Created (FUNCTION)

1.) Variable Environment - Each Execution Context has this variable environment where the variables of that function live
2.) Outer Environment - It has a reference to it's outer environment; it's outer lexical environment.  Where it sits physically in the code. Which tells it how to look down the scopr chain.
3.) 'this' - Every time an Execution Context is created; every time a fucntion is run, it gives us this variable called 'this'.

and 

4.) 'arguments' - contain a list of all the values of all the parameters that you pass to a fucnction.

/* -------- BIG WORD ALERT - ARGUMENTS - The Parameters you pass to a function. Javascript gives you a keyword of the same name which contains them all.

-----------*/

function greet(firstname, lastname, language) {

    language = language || 'en'; // this is how you set a 'default' parameter i.e - Language is equal to 'language' or 'en'.

    if (arguments.length === 0) {
        console.log('Missing Parameters!');
        console.log('---------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments) // when you have arguments (i.e. (firstname, lastname etc.)) then you have another global variable that is made for you just like 'this'.
    console.log('arg 0: ' + arguments[0]);
    console.log('-----------------')
}

// greet(); 
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'es');
// greet('Bob', 'Tim', 'zn');


// Funciton Overloading

function greet(firstname, lastname, language) {

    language = language || 'en'

    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
        console.log('Hola ', + firsname + ' ' + lastname);
    
    }

    function greetEnglish(firstname, lastname) {
        greet(firstname, lastname, 'en');
    }

    function greetSpanish(firstname, lastname) {
        greet(firstname, lastname, 'es');
    }
}

// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');



/* ------------------- CONCEPTUAL ASIDE - Syntax Parsers -------------------------*/

/* ----- 

Remember that the code that you write isn't directly run on the computer but there's that intermediate program between your code that the computer that translates your code into something that the computer will understand.

The Javascript Engine on your brower, for example, does exactly this.

------- */


/* ------------------- DANGEROUS ASIDE - Automatic Semicolon insertion -------------------------*/

/* -------

Semicolons are OPTIONAL in CORE Javascript?

Why is this?

Well, Javascript engine does something for you. If it sees one character at a time, it knows what the language expects; it knows that the syntax should look like. At the end of the line say you do a carriage return and you forget a Semicolon? Well the Javascript engine adds it for you. This is why it's OPTIONAL. Not because it's truly optional, but, becuase the Javascript Engine is putting them where it thinks they should be. If they're missing

RULE ONE - you should always put your own semicolons in because you don't want the Javascript Engine to make that decision for you. Especially in the case of 'RETURN' Automatic Semicolon insertion can cause a lot of furstration.

RULE TWO - Always, ALWAYS put a semicolon everywhere where you would expect it.


---- */

function getPerson() {

    return // There's a carriage return here. So the Javascript Engine placed a smeicolon here. Hence the return result is undefined
    {
        firstname: 'Shawn'
    }
}
console.log(getPerson());

function getPerson() {

    return { // this is correct
        firstname: 'Shawn'
    }
}
console.log(getPerson());


/* ------------------- BIG WORD ALERT - Whitespace -------------------------*/

/* ----- 

Whitespace - Invisible characters that create literal "space" in your written code - Carriage returns, tabs, spaces.

IMPORTANT - The whitepsace is ignored. SEE? YOU SHOULD DO THIS. Make your code readable and understandable with commenting

------- */

var 
    // first name of person
    firstname, 

    // last name of the person
    lastname, 
    
    // the language
    // can be 'en' or 'es'
    language;

var person = {
    firstname: 'Bill',
    lastname: 'Furlough'
}

console.log(person);


