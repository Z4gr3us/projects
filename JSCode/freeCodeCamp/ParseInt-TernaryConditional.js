function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");
  
  
  
  // convertToInteger should use the parseInt() function
  // convertToInteger("56") should return a number
  // convertToInteger("56") should return 56
  // convertToInteger("77") should return 77
  // convertToInteger("JamesBond") should return NaN
  
  /* -------------------------------------------------------------- */
  
  
  /* ----- The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
  
  The function call looks like:
  
  parseInt(string, radix);
  
  And here's an example:
  
  var a = parseInt("11", 2);
  
  The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3. -----*/
  
  function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011");
  
  
  // convertToInteger should use the parseInt() function
  // convertToInteger("10011") should return a number
  // convertToInteger("10011") should return 19
  // convertToInteger("JamesBond") should return NaN
  
  
  /* -------------------------------------------------------------- */
  














/* ----- Basic JavaScript: Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? statement-if-true : statement-if-false;

The following function uses an if-else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
} ------------*/


  
  function checkEqual(a, b) {
    return a === b ? true : false;
  }
  
  checkEqual(1, 2);
  
  
  // checkEqual should use the conditional operator
  // checkEqual(1, 2) should return false
  // checkEqual(1, 1) should return true
  // checkEqual(1, -1) should return false
  
  
  /* -------------------------------------------------------------- */
  
  
  // Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
  
  function checkSign(num) {
    return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
  }
  
  checkSign(10);


  // checkSign should use multiple conditional operators
  // checkSign(10) should return "positive". Note that capitalization matters
  // checkSign(-12) should return "negative". Note that capitalization matters
  // checkSign(0) should return "zero". Note that capitalization matters
  
  /* -------------------------------------------------------------- */
  
  
  
  
  /* -------------------------------------------------------------- */