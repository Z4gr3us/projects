
/* --- Call(), Apply() and Bind() Functions ---- */

/* --- The FUNCTION is a special kind of object
1. it has a NAME property that is optional (i.e. can be anonymous)
2. it has a CODE property that contains the code and that code property is INVOCABLE
3. BUT ALL FUCNTIONS HAVE SPECIAL ACCESS TO SEVERAL FUNCTION/METHODS:
    - CALL()
    - APPLY()
    - BIND()
And all of these have to do with the THIS variable and the arguments that you pass to the function as well.

--- */

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

// so this is outside the above person object right? But we're wtill gonna use the 'THIS' keyword 

// var logName = function(lang1, lang2) {

//     console.log('Logged: ' + this.getFullName());
// }

// logName();

/* --- The above will throw an error and fail. When you go to run it you'll get an 'undefined is not a funciton' Why?
        1. the 'THIS' is a global object and 
        2. there is no 'getFullName' so that's undefined
        3. then we try to invoke undefined (getFullName())
        4. and it gives an error

Wouldn't it be nice to be able to CONTORL WHAT THE 'THIS' KEYWORD POINTS TO?

--- */

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');

}

var logPersonName = logName.bind(person)  // If we use the BIND() method we can CONTROL THE THIS VARIABLE

/* --- So, What exactly is the BIND() method doing?
        1. well, first of all we wouldn't invoke the funciton by writing it like this - 'logName().bind' because logName is already funciton that already returns a value
        2. we're looking to actually use the function 'logName' AS AN OBJECT and
        3. CALL a METHOD of that OBJECT which,
        4. in this case is BIND() --  so, just logName.bind cause this is a funciton object
        5. then we pass to whatever OBJECT I want to BE THE 'THIS' Variable -- logName.bind(person) -- Which in this case is 'person' when the funciton runs 
        6. KEY: The BIND METHOD RETURNS A NEW FUNCTION - so it actually MAKES A COPY of the logName function and sets up this new copy so that whenever it's run; when its execution context is created, the Javascript engine sees that it was created with this BIND() Method which sets up some hidden things in background so that when the Javascript engine decides 'what is the 'THIS' variable?' it says, 'Well it must be that (person)'

--- */

logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']); // this does the EXACT SAME THING AS CALL except it requires an ARRAY of PARAMETERS
                                    // that's the only difference bewtween CALL() and APPLY()
                                    // An example is below - take the above object and turn it into a function expression (encompassing it in parantheses) and then use the APPLY OR CALL Methods

                                    (function(lang1, lang2) {

                                        console.log('Logged: ' + this.getFullName());
                                        console.log('Arguments: ' + lang1 + ' ' + lang2);
                                        console.log('-----------------');
                                    
                                    }).apply(person, ['en', 'es']);


var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2))

/* --- BIG WORD ALERT --- */

// FUNCTION CURRYING - Creating a copy of a function but with some preset parameters. Very useful in mathematical situations

function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(4));

// in this case we've intentionally made a permanent character set to a number - this case it's a which is now always 2 thanks to this line of text (this, 2)