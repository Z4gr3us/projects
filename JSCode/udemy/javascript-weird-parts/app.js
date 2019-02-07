
/* ----- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)S ------- */

// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Ted');


// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
}
greetFunc('Ted');

// This invokes the function immediately after creation. 
// using an Immediately INvoked Function Expression (IIFE)

var greeting = function(name) {
    console.log('Hello ' + name);
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