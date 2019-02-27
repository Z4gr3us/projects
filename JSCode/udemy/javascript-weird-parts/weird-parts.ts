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




/* ----- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)S ------- */

// function statement
function greet(name) {
    console.log('Hello ' + name);
}
//greet('Ted');


// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
}
greetFunc('Ted');

// This invokes the function immediately after creation. 
// using an Immediately INvoked Function Expression (IIFE)

var greeting = function(name) {
    return 'Hello ' + name;
}('Billy'); // invoking it immediatley here.
            // Here's what happens:
            // The Function Object 'function(name) {console.log('Hello ' + name);}' will be created
            // Then it will be invoked '();' That is, called or run.
            // And that value will be returned. And then THAT will be set equal to greeting 'var greeting ='
            // So when you console.log(greeting); in this case, you will get 'Hello undefined' (because there's no value given yet (); )
            // So if you give it a value (say ('Billy'); then you'd get 'Hello Billy')
            // See what's happening? We're creating the function (function(name) {console.log('Hello ' + name);}) then calling the function (('Billy');)
            // Now 'greeting' variable holds the string instead of the empty function
            // So when you console.log(greeting); it'll spit back the completed string variable instead of just the function.
console.log(greeting);

// Valid Syntax:

3;

"I am a string"




// Below is a classic example of an IIFE.
// A wonderful tool in your Javascript Arsenal
// You'll see this in almost every Javascript framework

var firstname = 'Billy';

(function(name) { 

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);

}(firstname)); // placing paranteses around the function makes it a valid syntactical function expression. Take the paranteses away, get an error.


// IIFE

var greeting = 'Hola';

(function(global, name) { 

    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window, 'Dur')); // Here's my immediately Invoked Function Expression (IIFE) When this code is first loaded we have our Global Exectuion Context. Then it hits this line and creates '()' and then the code is run inside the new exectuion context (the '()')

console.log(greeting);





/* --------- UNDERSTANDING CLOSURES -------------- */

function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}

var sayHi = greet('Hi');
sayHi('Shawn')

/* --- How is all this possible? Because of 'Closures'

Here's what's going on under the hood - 
1. this line 'var sayHi = greet('Hi');' creates a new excution context that contains whattosay = 'Hi' - after this is done it 'pops off the stack'
2. BUT the memory space is still filled with 'Hi'
3. then the line 'saysHi('Shawn') which w/in the Global environment creates another Execution Context
4. becasue there is still a reference to the 'Hi' the execution stack moving down the scope chain can still find it
5. the execution context has 'Closed in' its inner variables this is called a closure

--- */




/* --------- UNDERSTANDING CLOSURES 2 -------------- */

function buildFunctions() {

    var arr= [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function() {
                console.log(i)
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// What do you expect to see here? 

/* --- 
Global Exectution Context contains -- buildFunctions() and fs, then,
var fs = buildFunctions is invoked and in the execution context you have 'i is 3' and then 'arr [f0, f1, f2] - f for function cause the array contains 3 functions' 
so when fs[0](); is invoked you have a new execution context that point to the very last memory spot that was invoked previous
which is '3' -- i = 3 - it's only going to be able to tell you what's in memory right now; only right now that we're executing the function
We're doing EXACTLY what we're telling the Javascript Engine to do
The 'console.log' isn't executed when the buildFunctions execution context is invoked but when fs is invoked (i.e. fs[0](); fs[1](); fs[2]();)
---*/

function buildFunctions2() {

    var arr= [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
               return function() {
                   console.log(j);
               }
            }(i))
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

/* --- 
You may ask yourself, 'Well, what if I wanted this to work OUTSIDE the Global Context and around the Closure?'

1. with ES6 you could add a line above the 'arr.push ' that incorporates a 'let' variable - like 'let j = i' then change 'console.log(i)' to console.log(j)
2. OR you use an Immediately Invoked Function Expression or IIFE
3. you do this by adding a parent scope that holds the current value of 'i'
4. by placing paranthese around the funciton:

"(function(j) {
               
            }(i))"

5. Now we have a function that is passing 'i' - So what's going to happen?
6. well, every time the loop runs it's going to execute the above function
7. passing 0 then, executing a new one it will
8. pass 1 then, executing yet another execution context
9. And 'j' will be stored in EACH ONE of those execution contexts
10. so we'll have an execution context where 'j = 0' and another where 'j = 1' and then another where 'j = 2'
11. And even though those execution contexts will go away after this line is run 

"(function(j) {
               
            }(i))"

we know thanks to 'CLOSURES' that all those three 'j's' will be hanging out in memory.
12. So then we just add "return function() { console.log(j); }":

"(function(j) {
               return function() {
                   console.log(j);
               }
            }(i))"

with that line added we know that 'push' will push the result of the execution of the above funciton right?
13. and executing this function GIVES US BACK a funciton
14. so then 'j' gets pushed into the array
15. It doesn't need to go out of this 'for loop' it'll just go out to this execution context:

"(function(j) {
               return function() {
                   console.log(j);
               }
            }(i))"

and 'j' will store that vaule at the moment that it was executed in the loop
16. So we should see what we originally thought that we would see which was '0, 1, 2'

--- */






//  FRAMEWORK ASIDE

function makeGreeting(language) {

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }

    }

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

/* --- 
WLAKTHRU

1. 'var greetEnglish = makeGreeting('en');' is executed and it gets its own execution context and stores 'language 'en'' in memory
2. then it 'returns the function' (above if statements) in a variable called 'greetEnglish'
2. then the second line we call 'makeGreeting' again
3. this is the important distinction
4. in the previous line we ONLY CALLED that OUTER function once so ALL those function in that array pointed to that SAME MEMORY SPACE
5. but in this case we're calling the function twice
6. when we call it a second time, we get a NEW EXECUTION CONTEXT - Every time you call a function, you get a NEW EXECUTION CONTEXT
7. so that NEW EXECUTION CONTEXT has its own variable which is now 'language 'es'' stored in the variable 'greetSpanish'
8. so when we write out:

'greetEnglish('John', 'Doe');'

We access everything w/in that first execution context still in memory sitting in a new variable called 'greetEnglish? It is a CLOSURE
9. the 'if..' statements are in memory as well thus allowing us to add '('John', 'Doe')' and get the correct information back

--- */




// CLOSURES and CALLBACKS

function sayHiLater() {

    var greeting = 'Hi';

    setTimeout(function() {

        console.log(greeting);

    }, 3000);
}
sayHiLater();

// jQuery uses funciton expressions and first-class functions!
// $(.button).click(function() {
// 
// });

/* --- BIG FUCKIN WORD ALERT ---- */

/* ---- CALLBACK FUNCTION - a function you give to another function, to be run when the other function is finished
        So the function you call (i.e. invoke), 'calls back' by calling the function you gave it when it finishes.
--- */

// Here's a function that has a cllaback

function tellMeWhenDone(callback) {

    var a = 1000; // some work;
    var b = 2000; // some more work;

    callback(); // the 'callback', it runs the function I give it!

}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    console.log('All done...');
});