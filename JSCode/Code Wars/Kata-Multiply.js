// The code does not execute properly. Try to figure out why.

// my solution:

multiply = function (a, b) {
    return a * b;
  }


// Other ways of doing it:


const multiply = (a, b) => a * b;
// or
var multiply = (a, b) => a * b;
// or 
let multiply = (a, b) => a * b;

//  or

function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
  }