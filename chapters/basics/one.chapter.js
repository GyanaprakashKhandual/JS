// VARIABLES & CONSTANTS IN JAVASCRIPT

/*
 * Q1: What is the difference between const, var, and let?
 * 
 * A1: 
 * const: Cannot be reassigned after declaration. Block-scoped.
 * let: Can be reassigned. Block-scoped. Preferred for variables.
 * var: Can be reassigned. Function-scoped. Causes issues with hoisting and scope.
 * 
 * Q2: Why use 'let' instead of 'var'?
 * 
 * A2:
 * var is function-scoped, causing unexpected behavior in loops/blocks
 * var is hoisted and initialized as undefined (confusing bugs)
 * let is block-scoped (safer, more predictable)
 * let prevents accidental redeclaration in same scope
 */

// 1. CONST - Cannot be reassigned

const accountId = 3605261234;
// accountId = 2; // Error: Assignment to constant variable

const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign const


// 2. LET - Can be reassigned, block-scoped

let accountEmail = 'gyanprakash@gmail.com';
accountEmail = 'gyan@gmail.com'; // Allowed

let accountPassword = 'Gyana@123';
accountPassword = 'Chris@123'; // Allowed


// 3. VAR - Avoid! Function-scoped, hoisted

var accountCity = 'Bengaluru';
accountCity = 'Cuttack'; // Allowed but avoid var


// 4. NO KEYWORD - Creates global variable (BAD!)

accountCountry = 'India'; // No keyword = global variable (avoid!)


// Display output

console.table([accountId, accountEmail, accountPassword, accountCity, accountCountry]);
console.log(accountId);


// SCOPE EXAMPLES - Why 'let' is better than 'var'

// Example 1: Block scope with let vs var
{
    let blockLet = 'I am block-scoped';
    var blockVar = 'I am function-scoped';
}
// console.log(blockLet); // Error: blockLet is not defined
console.log(blockVar); // Works (but shouldn't - this is why var is bad!)


// Example 2: Loop problem with var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log('var i:', i), 100); // Prints: 3, 3, 3 (unexpected!)
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log('let j:', j), 100); // Prints: 0, 1, 2 (correct!)
}


// Example 3: Hoisting issue with var
console.log(hoistedVar); // undefined (hoisted but not assigned)
var hoistedVar = 'Hello';

// console.log(hoistedLet); // Error: Cannot access before initialization
let hoistedLet = 'World';


// Best Practices Summary

/*
 * Use 'const' by default for values that won't change
 * Use 'let' when you need to reassign values
 * Avoid 'var' - it causes scope and hoisting issues
 * Never declare variables without a keyword (creates globals)
 */

// Good examples:
const MAX_USERS = 100; // Constants in UPPER_CASE
let currentUser = 'gyan'; // Variables in camelCase
let userCount = 0;

// Bad examples:
var oldStyle = 'avoid this'; // Don't use var
globalVariable = 'bad'; // Don't skip keyword

// DATATYPES IN JAVASCRIPT

/*
 * Q1: What are the different data types in JavaScript?
 * 
 * A1: JavaScript has 8 data types divided into 2 categories:
 * 
 * Primitive Data Types (7):
 * 1. String - Text data
 * 2. Number - Numeric data (integers and decimals)
 * 3. Boolean - true or false
 * 4. Undefined - Variable declared but not assigned
 * 5. Null - Intentional absence of value
 * 6. Symbol - Unique identifier (ES6)
 * 7. BigInt - Large integers (ES2020)
 * 
 * Non-Primitive Data Type (1):
 * 8. Object - Collections of key-value pairs (includes arrays, functions, dates)
 * 
 * Q2: What is the difference between primitive and non-primitive types?
 * 
 * A2:
 * Primitive: Stored by value, immutable, copied by value
 * Non-Primitive: Stored by reference, mutable, copied by reference
 */


// 1. STRING - Text data enclosed in quotes

let firstName = 'Gyan';
let lastName = "Prakash";
let fullName = `Gyan Prakash`; // Template literal
let message = `Hello, ${fullName}`; // String interpolation

console.log(typeof firstName); // string


// 2. NUMBER - Numeric values (integer or decimal)

let age = 25;
let price = 99.99;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN; // Not a Number

console.log(typeof age); // number


// 3. BOOLEAN - true or false

let isLoggedIn = true;
let hasPermission = false;

console.log(typeof isLoggedIn); // boolean


// 4. UNDEFINED - Variable declared but not assigned

let accountBalance;
console.log(accountBalance); // undefined
console.log(typeof accountBalance); // undefined


// 5. NULL - Intentional absence of value

let selectedUser = null;
console.log(selectedUser); // null
console.log(typeof selectedUser); // object (this is a JavaScript bug)


// 6. SYMBOL - Unique identifier

let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false (each symbol is unique)
console.log(typeof id1); // symbol


// 7. BIGINT - Large integers beyond Number limit

let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBig = BigInt(9007199254740991);

console.log(typeof bigNumber); // bigint


// 8. OBJECT - Collection of key-value pairs

let user = {
    name: 'Gyan',
    age: 25,
    email: 'gyan@gmail.com'
};

console.log(typeof user); // object


// Array - Special type of object

let colors = ['red', 'green', 'blue'];
console.log(typeof colors); // object
console.log(Array.isArray(colors)); // true


// Function - Special type of object

function greet() {
    return 'Hello';
}

console.log(typeof greet); // function


// Date - Special type of object

let today = new Date();
console.log(typeof today); // object


// TYPE CHECKING EXAMPLES

console.log(typeof 'Hello'); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JavaScript quirk)
console.log(typeof Symbol('id')); // symbol
console.log(typeof 123n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () { }); // function


// TYPE CONVERSION EXAMPLES

// String to Number
let strNumber = '123';
let convertedNumber = Number(strNumber);
console.log(typeof convertedNumber); // number

// Number to String
let num = 456;
let convertedString = String(num);
console.log(typeof convertedString); // string

// To Boolean
let value1 = Boolean(1); // true
let value2 = Boolean(0); // false
let value3 = Boolean(''); // false
let value4 = Boolean('hello'); // true


// PRIMITIVE VS NON-PRIMITIVE EXAMPLE

// Primitive - Copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// Non-Primitive - Copied by reference
let obj1 = { name: 'Gyan' };
let obj2 = obj1;
obj2.name = 'Prakash';
console.log(obj1.name); // Prakash (changed)
console.log(obj2.name); // Prakash


// Summary

/*
 * Use typeof operator to check data type
 * Primitive types are immutable and stored by value
 * Objects are mutable and stored by reference
 * null has typeof 'object' due to JavaScript legacy bug
 * Arrays and functions are special types of objects
 */

// DATATYPE CONVERSION IN JAVASCRIPT

/*
 * Q1: What is type conversion in JavaScript?
 * 
 * A1: Type conversion is the process of converting one data type to another.
 * There are two types:
 * 1. Implicit Conversion (Type Coercion) - JavaScript automatically converts
 * 2. Explicit Conversion (Type Casting) - We manually convert using functions
 * 
 * Q2: What are the common conversion methods?
 * 
 * A2:
 * String() - Converts to string
 * Number() - Converts to number
 * Boolean() - Converts to boolean
 * parseInt() - Converts to integer
 * parseFloat() - Converts to decimal number
 * toString() - Converts to string
 */


// 1. CONVERTING TO STRING

// Using String() function
let num1 = 123;
let str1 = String(num1);
console.log(str1); // "123"
console.log(typeof str1); // string

let bool1 = true;
let str2 = String(bool1);
console.log(str2); // "true"
console.log(typeof str2); // string

// Using toString() method
let num2 = 456;
let str3 = num2.toString();
console.log(str3); // "456"
console.log(typeof str3); // string

// Using template literals
let num3 = 789;
let str4 = `${num3}`;
console.log(str4); // "789"
console.log(typeof str4); // string


// 2. CONVERTING TO NUMBER

// Using Number() function
let str5 = "123";
let num4 = Number(str5);
console.log(num4); // 123
console.log(typeof num4); // number

let str6 = "123abc";
let num5 = Number(str6);
console.log(num5); // NaN (Not a Number)

let bool2 = true;
let num6 = Number(bool2);
console.log(num6); // 1

let bool3 = false;
let num7 = Number(bool3);
console.log(num7); // 0

let nullValue = null;
let num8 = Number(nullValue);
console.log(num8); // 0

let undefinedValue = undefined;
let num9 = Number(undefinedValue);
console.log(num9); // NaN

// Using parseInt() - Converts to integer
let str7 = "123.45";
let int1 = parseInt(str7);
console.log(int1); // 123

let str8 = "123abc";
let int2 = parseInt(str8);
console.log(int2); // 123 (stops at first non-numeric character)

// Using parseFloat() - Converts to decimal number
let str9 = "123.45";
let float1 = parseFloat(str9);
console.log(float1); // 123.45

// Using unary plus operator
let str10 = "999";
let num10 = +str10;
console.log(num10); // 999
console.log(typeof num10); // number


// 3. CONVERTING TO BOOLEAN

// Using Boolean() function
let num11 = 1;
let bool4 = Boolean(num11);
console.log(bool4); // true

let num12 = 0;
let bool5 = Boolean(num12);
console.log(bool5); // false

let str11 = "Hello";
let bool6 = Boolean(str11);
console.log(bool6); // true

let str12 = "";
let bool7 = Boolean(str12);
console.log(bool7); // false

let nullVal = null;
let bool8 = Boolean(nullVal);
console.log(bool8); // false

let undefVal = undefined;
let bool9 = Boolean(undefVal);
console.log(bool9); // false

// Falsy values in JavaScript: false, 0, "", null, undefined, NaN
// Everything else is truthy


// 4. IMPLICIT CONVERSION (TYPE COERCION)

// String concatenation
let result1 = "5" + 2;
console.log(result1); // "52" (number converted to string)

let result2 = "5" + 2 + 3;
console.log(result2); // "523"

let result3 = 2 + 3 + "5";
console.log(result3); // "55"

// Numeric operations
let result4 = "5" - 2;
console.log(result4); // 3 (string converted to number)

let result5 = "10" * "2";
console.log(result5); // 20

let result6 = "10" / "2";
console.log(result6); // 5

// Boolean in numeric context
let result7 = true + 1;
console.log(result7); // 2 (true converts to 1)

let result8 = false + 5;
console.log(result8); // 5 (false converts to 0)


// 5. COMMON CONVERSION SCENARIOS

// Empty string to number
console.log(Number("")); // 0

// Whitespace string to number
console.log(Number("   ")); // 0

// String with only numbers
console.log(Number("123")); // 123

// String with decimal
console.log(Number("123.45")); // 123.45

// String with letters
console.log(Number("123abc")); // NaN

// Array to number
console.log(Number([1])); // 1
console.log(Number([1, 2])); // NaN

// Object to number
console.log(Number({})); // NaN


// 6. CHECKING FOR NaN

let invalidNumber = Number("abc");
console.log(invalidNumber); // NaN
console.log(isNaN(invalidNumber)); // true
console.log(Number.isNaN(invalidNumber)); // true


// 7. PRACTICAL EXAMPLES

// Converting user input (always comes as string)
let userAge = "25";
let ageIn = Number(userAge);
console.log(ageIn + 5); // 30

// Converting boolean flags
let isActive = "true";
let activeStatus = isActive === "true";
console.log(activeStatus); // true

// Parsing integer from string
let priceIn = "99.99 dollars";
let priceValue = parseInt(priceIn);
console.log(priceValue); // 99

// Parsing float from string
let temperature = "36.6 degrees";
let tempValue = parseFloat(temperature);
console.log(tempValue); // 36.6


// Summary

/*
 * Use String() or toString() to convert to string
 * Use Number(), parseInt(), or parseFloat() to convert to number
 * Use Boolean() to convert to boolean
 * Be aware of implicit conversions in operations
 * Check for NaN when converting strings to numbers
 * Falsy values: false, 0, "", null, undefined, NaN
 * All other values are truthy
 */

// CONSOLE METHODS IN JAVASCRIPT

/*
 * Q1: What is the console object in JavaScript?
 * 
 * A1: The console object provides access to the browser's debugging console.
 * It is used to output information, debug code, and test JavaScript programs.
 * Console methods help developers track code execution and find errors.
 * 
 * Q2: What are the most commonly used console methods?
 * 
 * A2:
 * console.log() - Display general information
 * console.error() - Display error messages
 * console.warn() - Display warning messages
 * console.table() - Display data in table format
 * console.clear() - Clear the console
 * console.time() and console.timeEnd() - Measure execution time
 * console.group() - Group related messages
 */


// 1. console.log() - Most common method for output

console.log('Hello World');
console.log('Name:', 'Gyan Prakash');
console.log('Age:', 25);

let firstNameIn = 'Gyan';
let lastNameIn = 'Prakash';
console.log(firstNameIn, lastNameIn);

console.log('Multiple', 'values', 'in', 'one', 'line');


// 2. console.error() - Display error messages in red

console.error('This is an error message');
console.error('File not found!');
console.error('Invalid user credentials');


// 3. console.warn() - Display warning messages in yellow

console.warn('This is a warning message');
console.warn('Low battery!');
console.warn('Deprecated function used');


// 4. console.info() - Display informational messages

console.info('This is an info message');
console.info('Application started successfully');
console.info('Version 1.0.0');


// 5. console.table() - Display data in table format

let userIn = {
    name: 'Gyan',
    age: 25,
    email: 'gyan@gmail.com'
};
console.table(userIn);

let users = [
    { name: 'Gyan', age: 25, city: 'Bengaluru' },
    { name: 'Prakash', age: 30, city: 'Cuttack' },
    { name: 'Kumar', age: 28, city: 'Delhi' }
];
console.table(users);

let numbers = [10, 20, 30, 40, 50];
console.table(numbers);


// 6. console.clear() - Clear the console

// console.clear(); // Uncomment to clear console


// 7. console.dir() - Display object properties in hierarchical format

let person = {
    name: 'Gyan',
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    }
};
console.dir(person);


// 8. console.time() and console.timeEnd() - Measure execution time

console.time('Loop Timer');
for (let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd('Loop Timer');

console.time('Function Timer');
function calculate() {
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
        sum += i;
    }
    return sum;
}
calculate();
console.timeEnd('Function Timer');


// 9. console.count() - Count how many times it's called

console.count('Counter');
console.count('Counter');
console.count('Counter');
console.count('Page Load');
console.count('Page Load');


// 10. console.countReset() - Reset the counter

console.count('Reset Counter');
console.count('Reset Counter');
console.countReset('Reset Counter');
console.count('Reset Counter');


// 11. console.group() and console.groupEnd() - Group related messages

console.group('User Details');
console.log('Name: Gyan Prakash');
console.log('Age: 25');
console.log('Email: gyan@gmail.com');
console.groupEnd();

console.group('Order Information');
console.log('Order ID: 12345');
console.log('Product: Laptop');
console.log('Price: 50000');
console.groupEnd();


// 12. console.groupCollapsed() - Create collapsed group

console.groupCollapsed('Collapsed Group');
console.log('This is inside collapsed group');
console.log('Click to expand');
console.groupEnd();


// 13. console.assert() - Display message only if condition is false

let ageInt = 15;
console.assert(ageInt >= 18, 'User must be 18 or older');

let score = 85;
console.assert(score >= 90, 'Score is less than 90');


// 14. console.trace() - Display stack trace

function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}

function thirdFunction() {
    console.trace('Trace the call stack');
}

firstFunction();


// 15. String Substitution in console.log()

let name = 'Gyan';
let score2 = 95;

console.log('Name: %s', name);
console.log('Score: %d', score2);
console.log('Percentage: %.2f', 95.456);
console.log('%s scored %d marks', name, score2);


// 16. Styling console output with CSS

console.log('%cStyled Text', 'color: blue; font-size: 20px; font-weight: bold;');
console.log('%cRed Text', 'color: red; background: yellow; padding: 5px;');
console.log('%cGreen Text', 'color: green; font-family: monospace;');


// 17. Practical Examples

// Debugging variable values
let username = 'gyan123';
let password = 'secret';
console.log('Username:', username);
console.log('Password:', password);

// Logging API response
let apiResponse = {
    status: 200,
    data: { id: 1, name: 'Product' },
    message: 'Success'
};
console.log('API Response:', apiResponse);
console.table(apiResponse);

// Tracking loop iterations
for (let i = 0; i < 5; i++) {
    console.log('Iteration:', i);
}

// Error handling
try {
    let result = undefinedVariable;
} catch (error) {
    console.error('Error occurred:', error.message);
}


// Summary

/*
 * console.log() - General output
 * console.error() - Error messages
 * console.warn() - Warning messages
 * console.table() - Tabular data
 * console.time() - Measure performance
 * console.group() - Organize output
 * console.assert() - Conditional logging
 * Use console methods for debugging and development
 * Remove or comment out console logs in production code
 */

