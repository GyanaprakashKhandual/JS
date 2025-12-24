// OPERATORS IN JAVASCRIPT

/*
 * Q1: What are operators in JavaScript?
 * 
 * A1: Operators are special symbols or keywords that perform operations on 
 * operands (values or variables). JavaScript has different types of operators
 * for performing various operations like arithmetic, comparison, logical, etc.
 * 
 * Q2: What are the main types of operators?
 * 
 * A2:
 * Arithmetic Operators - Perform mathematical calculations
 * Comparison Operators - Compare two values
 * Logical Operators - Perform logical operations
 * Assignment Operators - Assign values to variables
 * Other operators - Typeof, ternary, etc.
 * 
 * Q3: What is operator precedence?
 * 
 * A3: Operator precedence determines the order in which operations are 
 * performed. Operators with higher precedence are evaluated first.
 * Use parentheses () to control evaluation order.
 */


// 1. ARITHMETIC OPERATORS

// Addition (+)
let sum = 10 + 5;
console.log(sum); // 15

let total = 100 + 200 + 300;
console.log(total); // 600

// Subtraction (-)
let difference = 20 - 8;
console.log(difference); // 12

let remaining = 100 - 25;
console.log(remaining); // 75

// Multiplication (*)
let product = 6 * 7;
console.log(product); // 42

let area = 10 * 20;
console.log(area); // 200

// Division (/)
let quotient = 20 / 4;
console.log(quotient); // 5

let average = 100 / 4;
console.log(average); // 25

// Modulus (%) - Remainder
let remainder = 17 % 5;
console.log(remainder); // 2

let isEven = 10 % 2;
console.log(isEven); // 0 (even numbers have remainder 0)

let isOdd = 11 % 2;
console.log(isOdd); // 1 (odd numbers have remainder 1)

// Exponentiation (**) - Power
let power = 2 ** 3;
console.log(power); // 8 (2 to the power 3)

let square = 5 ** 2;
console.log(square); // 25

let cube = 3 ** 3;
console.log(cube); // 27

// Increment (++)
let count = 5;
count++;
console.log(count); // 6

let x = 10;
console.log(x++); // 10 (post-increment: use then increment)
console.log(x); // 11

let y = 10;
console.log(++y); // 11 (pre-increment: increment then use)
console.log(y); // 11

// Decrement (--)
let number = 8;
number--;
console.log(number); // 7

let a = 5;
console.log(a--); // 5 (post-decrement: use then decrement)
console.log(a); // 4

let b = 5;
console.log(--b); // 4 (pre-decrement: decrement then use)
console.log(b); // 4

// Unary plus (+) and minus (-)
let positive = +10;
console.log(positive); // 10

let negative = -10;
console.log(negative); // -10

let numString = '5';
let converted = +numString;
console.log(converted); // 5 (converts string to number)


// 2. COMPARISON OPERATORS

// Equal to (==) - Loose equality with type coercion
console.log(5 == 5); // true
console.log(5 == '5'); // true (type coercion)
console.log(true == 1); // true
console.log(false == 0); // true

// Strict equal to (===) - No type coercion
console.log(5 === 5); // true
console.log(5 === '5'); // false (different types)
console.log(true === 1); // false
console.log(null === undefined); // false

// Not equal to (!=) - Loose inequality
console.log(5 != 3); // true
console.log(5 != '5'); // false (type coercion)
console.log(10 != 20); // true

// Strict not equal to (!==) - No type coercion
console.log(5 !== 3); // true
console.log(5 !== '5'); // true (different types)
console.log(10 !== 10); // false

// Greater than (>)
console.log(10 > 5); // true
console.log(5 > 10); // false
console.log(5 > 5); // false

// Less than (<)
console.log(5 < 10); // true
console.log(10 < 5); // false
console.log(5 < 5); // false

// Greater than or equal to (>=)
console.log(10 >= 5); // true
console.log(5 >= 5); // true
console.log(3 >= 5); // false

// Less than or equal to (<=)
console.log(5 <= 10); // true
console.log(5 <= 5); // true
console.log(10 <= 5); // false

// String comparison
console.log('apple' < 'banana'); // true (alphabetical order)
console.log('z' > 'a'); // true


// 3. LOGICAL OPERATORS

// Logical AND (&&) - Returns true if both operands are true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true

let score = 85;
console.log(score >= 80 && score <= 90); // true

// Logical OR (||) - Returns true if at least one operand is true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true

// Logical NOT (!) - Reverses the boolean value
console.log(!true); // false
console.log(!false); // true

let isLoggedIn = false;
console.log(!isLoggedIn); // true

let hasPermission = true;
console.log(!hasPermission); // false

// Short-circuit evaluation
let name = '' || 'Guest';
console.log(name); // "Guest" (empty string is falsy)

let username = 'Gyan' || 'Anonymous';
console.log(username); // "Gyan" (stops at first truthy value)

let value = null && 'Some value';
console.log(value); // null (stops at first falsy value)

// Combining logical operators
let userAge = 22;
let hasID = true;
let hasTicket = true;
console.log(userAge >= 18 && hasID && hasTicket); // true

let isAdmin = false;
let isModerator = true;
let hasAccess = isAdmin || isModerator;
console.log(hasAccess); // true


// 4. ASSIGNMENT OPERATORS

// Simple assignment (=)
let num = 10;
console.log(num); // 10

let firstName = 'Gyan';
console.log(firstName); // Gyan

// Addition assignment (+=)
let total1 = 10;
total1 += 5; // Same as: total1 = total1 + 5
console.log(total1); // 15

let message = 'Hello';
message += ' World'; // String concatenation
console.log(message); // "Hello World"

// Subtraction assignment (-=)
let balance = 100;
balance -= 30; // Same as: balance = balance - 30
console.log(balance); // 70

// Multiplication assignment (*=)
let price = 50;
price *= 2; // Same as: price = price * 2
console.log(price); // 100

// Division assignment (/=)
let amount = 100;
amount /= 4; // Same as: amount = amount / 4
console.log(amount); // 25

// Modulus assignment (%=)
let remainder1 = 17;
remainder1 %= 5; // Same as: remainder1 = remainder1 % 5
console.log(remainder1); // 2

// Exponentiation assignment (**=)
let base = 2;
base **= 3; // Same as: base = base ** 3
console.log(base); // 8


// 5. OTHER IMPORTANT OPERATORS

// Typeof operator - Returns type of variable
console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (JavaScript quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () { }); // "function"

// Ternary operator (condition ? true : false)
let userScore = 85;
let result = userScore >= 50 ? 'Pass' : 'Fail';
console.log(result); // "Pass"

let temperature = 30;
let weather = temperature > 25 ? 'Hot' : 'Cold';
console.log(weather); // "Hot"

let marks = 45;
let grade = marks >= 90 ? 'A' : marks >= 80 ? 'B' : marks >= 70 ? 'C' : 'D';
console.log(grade); // "D"

// Nullish coalescing operator (??)
let userName1 = null ?? 'Guest';
console.log(userName1); // "Guest"

let userName2 = undefined ?? 'Anonymous';
console.log(userName2); // "Anonymous"

let userName3 = 'Gyan' ?? 'Default';
console.log(userName3); // "Gyan"

let count1 = 0 ?? 10;
console.log(count1); // 0 (0 is not null or undefined)

// Optional chaining operator (?.)
let user = {
    name: 'Gyan',
    address: {
        city: 'Bengaluru'
    }
};
console.log(user?.address?.city); // "Bengaluru"
console.log(user?.phone?.number); // undefined (no error)


// 6. OPERATOR PRECEDENCE

// Parentheses have highest precedence
let result1 = 5 + 3 * 2;
console.log(result1); // 11 (multiplication first)

let result2 = (5 + 3) * 2;
console.log(result2); // 16 (parentheses first)

// Multiple operations
let result3 = 10 + 5 * 2 - 3;
console.log(result3); // 17 (5*2=10, 10+10=20, 20-3=17)

let result4 = (10 + 5) * (2 - 3);
console.log(result4); // -15

// Comparison and logical operators
let result5 = 5 > 3 && 10 < 20;
console.log(result5); // true

let result6 = 5 > 3 || 10 > 20 && 15 < 10;
console.log(result6); // true (AND has higher precedence than OR)


// 7. PRACTICAL EXAMPLES

// Calculate total price with discount
let itemPrice = 1000;
let discount = 10;
let finalPrice = itemPrice - (itemPrice * discount / 100);
console.log(finalPrice); // 900

// Check eligibility
let studentAge = 16;
let hasParentConsent = true;
let isEligible = studentAge >= 18 || (studentAge >= 16 && hasParentConsent);
console.log(isEligible); // true

// Validate form input
let email = 'test@gmail.com';
let password = 'pass123';
let isValidForm = email !== '' && password.length >= 6;
console.log(isValidForm); // true

// Calculate BMI
let weight = 70;
let height = 1.75;
let bmi = weight / (height ** 2);
console.log(bmi.toFixed(2)); // 22.86

// Toggle boolean
let isActive = true;
isActive = !isActive;
console.log(isActive); // false

// Increment counter
let pageViews = 100;
pageViews++;
console.log(pageViews); // 101

// Apply multiple discounts
let originalPrice = 1000;
originalPrice *= 0.9; // 10% off
originalPrice *= 0.95; // Additional 5% off
console.log(originalPrice); // 855


// Summary

/*
 * Arithmetic operators: +, -, *, /, %, **, ++, --
 * Comparison operators: ==, ===, !=, !==, >, <, >=, <=
 * Logical operators: &&, ||, !
 * Assignment operators: =, +=, -=, *=, /=, %=, **=
 * Use === instead of == for strict comparison
 * Logical operators use short-circuit evaluation
 * Use parentheses to control operator precedence
 * Increment/decrement can be prefix or postfix
 * Ternary operator is shorthand for if-else
 */


// STACK AND HEAP MEMORY IN JAVASCRIPT

/*
 * Q1: What is memory management in JavaScript?
 * 
 * A1: JavaScript uses two types of memory to store data:
 * Stack Memory - Used for primitive data types and function calls
 * Heap Memory - Used for objects and reference data types
 * Understanding memory helps you understand how variables are copied and modified.
 * 
 * Q2: What is the difference between Stack and Heap?
 * 
 * A2:
 * Stack Memory:
 * - Stores primitive values (string, number, boolean, null, undefined, symbol, bigint)
 * - Fixed size allocation
 * - Fast access
 * - Automatically managed (LIFO - Last In First Out)
 * - Values are copied when assigned
 * 
 * Heap Memory:
 * - Stores objects, arrays, and functions
 * - Dynamic size allocation
 * - Slower access compared to stack
 * - References are stored in stack, actual data in heap
 * - Values are referenced when assigned
 * 
 * Q3: What are primitive and reference types?
 * 
 * A3:
 * Primitive Types - Stored in stack, copied by value
 * Reference Types - Stored in heap, copied by reference
 */


// 1. PRIMITIVE TYPES - STACK MEMORY

// Primitive values are stored directly in stack
// When copied, a new independent copy is created

// Number
let age1 = 25;
let age2 = age1; // Copy by value
age2 = 30;

console.log(age1); // 25 (unchanged)
console.log(age2); // 30 (changed)

// String
let name1 = 'Gyan';
let name2 = name1; // Copy by value
name2 = 'Prakash';

console.log(name1); // "Gyan" (unchanged)
console.log(name2); // "Prakash" (changed)

// Boolean
let isActive1 = true;
let isActive2 = isActive1; // Copy by value
isActive2 = false;

console.log(isActive1); // true (unchanged)
console.log(isActive2); // false (changed)

// Null
let value1 = null;
let value2 = value1; // Copy by value
value2 = 'Something';

console.log(value1); // null (unchanged)
console.log(value2); // "Something" (changed)

// Undefined
let data1 = undefined;
let data2 = data1; // Copy by value
data2 = 100;

console.log(data1); // undefined (unchanged)
console.log(data2); // 100 (changed)


// 2. REFERENCE TYPES - HEAP MEMORY

// Objects are stored in heap
// Variables hold references (memory addresses) to the actual data
// When copied, only the reference is copied, not the actual data

// Object example
let user1 = {
    name: 'Gyan',
    age: 25
};

let user2 = user1; // Copy by reference (both point to same object)
user2.age = 30;

console.log(user1.age); // 30 (changed - same object)
console.log(user2.age); // 30 (changed)

// Array example
let colors1 = ['red', 'green', 'blue'];
let colors2 = colors1; // Copy by reference
colors2.push('yellow');

console.log(colors1); // ['red', 'green', 'blue', 'yellow'] (changed)
console.log(colors2); // ['red', 'green', 'blue', 'yellow'] (changed)

// Function example
let obj1 = { value: 10 };
let obj2 = obj1; // Copy by reference
obj2.value = 20;

console.log(obj1.value); // 20 (changed - same object)
console.log(obj2.value); // 20 (changed)


// 3. VISUAL REPRESENTATION

/*
 * STACK MEMORY (Primitives):
 * 
 * Variable    Value
 * --------    -----
 * age1        25
 * age2        30
 * name1       "Gyan"
 * name2       "Prakash"
 * 
 * Each variable has its own independent copy
 * 
 * 
 * HEAP MEMORY (Objects):
 * 
 * STACK                    HEAP
 * Variable   Reference     Memory Address   Data
 * --------   ---------     --------------   ----
 * user1      0x001    -->  0x001           { name: "Gyan", age: 30 }
 * user2      0x001    -->  Same object
 * 
 * Both variables point to the same object in heap
 */


// 4. COMPARING PRIMITIVES VS REFERENCES

// Primitives - Compare by value
let num1 = 10;
let num2 = 10;
console.log(num1 === num2); // true (same value)

let str1 = 'Hello';
let str2 = 'Hello';
console.log(str1 === str2); // true (same value)

// Objects - Compare by reference
let person1 = { name: 'Gyan' };
let person2 = { name: 'Gyan' };
console.log(person1 === person2); // false (different objects in memory)

let person3 = person1;
console.log(person1 === person3); // true (same reference)

// Arrays - Compare by reference
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (different arrays in memory)

let arr3 = arr1;
console.log(arr1 === arr3); // true (same reference)


// 5. CREATING INDEPENDENT COPIES OF OBJECTS

// Problem: Simple assignment copies reference
let original = { name: 'Gyan', age: 25 };
let copy1 = original; // Same reference
copy1.age = 30;
console.log(original.age); // 30 (changed)

// Solution 1: Using Object.assign()
let original2 = { name: 'Gyan', age: 25 };
let copy2 = Object.assign({}, original2); // New object
copy2.age = 30;
console.log(original2.age); // 25 (unchanged)
console.log(copy2.age); // 30 (changed)

// Solution 2: Using spread operator (...)
let original3 = { name: 'Gyan', age: 25 };
let copy3 = { ...original3 }; // New object
copy3.age = 30;
console.log(original3.age); // 25 (unchanged)
console.log(copy3.age); // 30 (changed)

// Solution 3: Using JSON methods (deep copy)
let original4 = { name: 'Gyan', age: 25, address: { city: 'Bengaluru' } };
let copy4 = JSON.parse(JSON.stringify(original4)); // Deep copy
copy4.address.city = 'Delhi';
console.log(original4.address.city); // "Bengaluru" (unchanged)
console.log(copy4.address.city); // "Delhi" (changed)


// 6. CREATING INDEPENDENT COPIES OF ARRAYS

// Problem: Simple assignment copies reference
let numbers1 = [1, 2, 3];
let numbers2 = numbers1; // Same reference
numbers2.push(4);
console.log(numbers1); // [1, 2, 3, 4] (changed)

// Solution 1: Using slice()
let nums1 = [1, 2, 3];
let nums2 = nums1.slice(); // New array
nums2.push(4);
console.log(nums1); // [1, 2, 3] (unchanged)
console.log(nums2); // [1, 2, 3, 4] (changed)

// Solution 2: Using spread operator (...)
let items1 = [1, 2, 3];
let items2 = [...items1]; // New array
items2.push(4);
console.log(items1); // [1, 2, 3] (unchanged)
console.log(items2); // [1, 2, 3, 4] (changed)

// Solution 3: Using Array.from()
let list1 = [1, 2, 3];
let list2 = Array.from(list1); // New array
list2.push(4);
console.log(list1); // [1, 2, 3] (unchanged)
console.log(list2); // [1, 2, 3, 4] (changed)


// 7. SHALLOW COPY VS DEEP COPY

// Shallow copy - Only copies first level
let nested1 = {
    name: 'Gyan',
    address: { city: 'Bengaluru' }
};
let nested2 = { ...nested1 }; // Shallow copy
nested2.name = 'Prakash'; // Changes only in nested2
nested2.address.city = 'Delhi'; // Changes in both (nested object is still referenced)

console.log(nested1.name); // "Gyan" (unchanged)
console.log(nested1.address.city); // "Delhi" (changed - same reference)
console.log(nested2.name); // "Prakash" (changed)
console.log(nested2.address.city); // "Delhi" (changed)

// Deep copy - Copies all levels
let nested3 = {
    name: 'Gyan',
    address: { city: 'Bengaluru' }
};
let nested4 = JSON.parse(JSON.stringify(nested3)); // Deep copy
nested4.name = 'Prakash';
nested4.address.city = 'Delhi';

console.log(nested3.name); // "Gyan" (unchanged)
console.log(nested3.address.city); // "Bengaluru" (unchanged)
console.log(nested4.name); // "Prakash" (changed)
console.log(nested4.address.city); // "Delhi" (changed)


// 8. FUNCTION PARAMETERS

// Primitives passed by value
function changeNumber(num) {
    num = 100;
}
let myNum = 50;
changeNumber(myNum);
console.log(myNum); // 50 (unchanged)

// Objects passed by reference
function changeObject(obj) {
    obj.name = 'Changed';
}
let myObj = { name: 'Original' };
changeObject(myObj);
console.log(myObj.name); // "Changed" (changed)

// Arrays passed by reference
function changeArray(arr) {
    arr.push(4);
}
let myArr = [1, 2, 3];
changeArray(myArr);
console.log(myArr); // [1, 2, 3, 4] (changed)

// Reassigning doesn't affect original
function reassignObject(obj) {
    obj = { name: 'New Object' }; // Creates new reference
}
let testObj = { name: 'Original' };
reassignObject(testObj);
console.log(testObj.name); // "Original" (unchanged)


// 9. PRACTICAL EXAMPLES

// Example 1: Counter
let counter1 = 0;
let counter2 = counter1;
counter2++;
console.log(counter1); // 0 (independent)
console.log(counter2); // 1 (independent)

// Example 2: User settings
let userSettings = {
    theme: 'dark',
    language: 'en'
};
let adminSettings = userSettings; // Same reference
adminSettings.theme = 'light';
console.log(userSettings.theme); // "light" (changed for both)

// Example 3: Shopping cart
let cart = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mouse', price: 500 }
];
let backupCart = [...cart]; // Shallow copy
backupCart[0].price = 45000; // Modifies nested object
console.log(cart[0].price); // 45000 (changed - nested object is referenced)

// Example 4: Configuration clone
let config = {
    api: 'https://api.example.com',
    settings: { timeout: 5000 }
};
let configClone = JSON.parse(JSON.stringify(config)); // Deep copy
configClone.settings.timeout = 10000;
console.log(config.settings.timeout); // 5000 (unchanged)
console.log(configClone.settings.timeout); // 10000 (changed)


// 10. MEMORY MANAGEMENT BEST PRACTICES

// Avoid unnecessary object copies
let data = { value: 100 };
// Bad: Creates unnecessary copy
let copy5 = { ...data };
console.log(copy5.value);
// Good: Use reference when you don't need to modify
console.log(data.value);

// Clear references when done
let largeArray = new Array(1000000).fill(0);
// When done with largeArray:
largeArray = null; // Helps garbage collection

// Use const for objects you don't want to reassign
const settings = { theme: 'dark' };
settings.theme = 'light'; // Allowed (modifying property)
// settings = {}; // Error (reassignment not allowed)


// Summary

/*
 * Primitive types stored in stack, copied by value
 * Reference types stored in heap, copied by reference
 * Stack is faster but limited in size
 * Heap is slower but can grow dynamically
 * Primitives: string, number, boolean, null, undefined, symbol, bigint
 * Reference types: objects, arrays, functions
 * Use spread operator or Object.assign() for shallow copies
 * Use JSON.parse(JSON.stringify()) for deep copies
 * Be careful when passing objects to functions
 * Understanding memory helps prevent bugs with object mutations
 */