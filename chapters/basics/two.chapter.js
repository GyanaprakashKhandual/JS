// TYPE COERCION IN JAVASCRIPT

/*
 * Q1: What is type coercion in JavaScript?
 * 
 * A1: Type coercion is the automatic or implicit conversion of values from 
 * one data type to another by JavaScript. It happens when operations are 
 * performed on different data types. JavaScript tries to convert values 
 * to make the operation possible.
 * 
 * Q2: What are the types of coercion?
 * 
 * A2:
 * Implicit Coercion - JavaScript automatically converts types
 * Explicit Coercion - We manually convert types using functions
 * 
 * Q3: When does coercion happen?
 * 
 * A3:
 * During arithmetic operations
 * During string concatenation
 * During comparison operations
 * In logical contexts (if statements, loops)
 * With operators like +, -, *, /, ==, !=
 */


// 1. STRING COERCION

// Using + operator with strings
let result1 = '5' + 2;
console.log(result1); // "52" (number 2 coerced to string)

let result2 = 'Hello' + 123;
console.log(result2); // "Hello123"

let result3 = 'Price: ' + 100;
console.log(result3); // "Price: 100"

let result4 = '10' + '20';
console.log(result4); // "1020"

// Multiple values
let result5 = '5' + 2 + 3;
console.log(result5); // "523" (left to right evaluation)

let result6 = 5 + 2 + '3';
console.log(result6); // "73" (5+2=7, then 7+"3"="73")

// With other types
let result7 = 'Value: ' + true;
console.log(result7); // "Value: true"

let result8 = 'Result: ' + null;
console.log(result8); // "Result: null"

let result9 = 'Undefined: ' + undefined;
console.log(result9); // "Undefined: undefined"


// 2. NUMBER COERCION

// Using arithmetic operators (-, *, /, %)
let result10 = '10' - 5;
console.log(result10); // 5 (string "10" coerced to number)

let result11 = '20' * 2;
console.log(result11); // 40

let result12 = '100' / 4;
console.log(result12); // 25

let result13 = '15' % 4;
console.log(result13); // 3

// Multiple operations
let result14 = '10' - '5';
console.log(result14); // 5

let result15 = '10' * '2';
console.log(result15); // 20

// With invalid numbers
let result16 = '10' - 'abc';
console.log(result16); // NaN (cannot convert "abc" to number)

let result17 = 'hello' * 2;
console.log(result17); // NaN

// Unary plus operator
let result18 = +'123';
console.log(result18); // 123 (string coerced to number)

let result19 = +'45.67';
console.log(result19); // 45.67

let result20 = +true;
console.log(result20); // 1

let result21 = +false;
console.log(result21); // 0

let result22 = +null;
console.log(result22); // 0

let result23 = +undefined;
console.log(result23); // NaN


// 3. BOOLEAN COERCION

// In if statements
if ('hello') {
    console.log('Non-empty string is truthy');
}

if (0) {
    console.log('This will not run');
} else {
    console.log('0 is falsy');
}

// Falsy values
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Truthy values
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean('hello')); // true
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)
console.log(Boolean(-1)); // true (any non-zero number is truthy)

// Logical NOT operator
let result24 = !0;
console.log(result24); // true

let result25 = !'';
console.log(result25); // true

let result26 = !'hello';
console.log(result26); // false

// Double NOT for boolean conversion
let result27 = !!'hello';
console.log(result27); // true

let result28 = !!0;
console.log(result28); // false


// 4. EQUALITY COERCION

// Loose equality (==) - performs type coercion
console.log(5 == '5'); // true (string "5" coerced to number)
console.log(true == 1); // true (true coerced to 1)
console.log(false == 0); // true (false coerced to 0)
console.log(null == undefined); // true (special case)
console.log('0' == 0); // true
console.log('' == 0); // true (empty string coerced to 0)

// Strict equality (===) - no type coercion
console.log(5 === '5'); // false (different types)
console.log(true === 1); // false
console.log(false === 0); // false
console.log(null === undefined); // false
console.log('0' === 0); // false


// 5. COMPARISON COERCION

// Comparison operators (<, >, <=, >=)
console.log('10' > 5); // true (string "10" coerced to number)
console.log('20' < 30); // true
console.log('5' >= 5); // true
console.log('apple' > 'banana'); // false (string comparison)

// Mixed types
console.log(true > 0); // true (true coerced to 1)
console.log(false < 1); // true (false coerced to 0)


// 6. OBJECT COERCION

// Objects to primitives
let obj1 = { value: 10 };
console.log(obj1 + 5); // "[object Object]5" (object to string)

let obj2 = { valueOf: () => 20 };
console.log(obj2 + 5); // 25 (uses valueOf method)

let obj3 = { toString: () => '30' };
console.log(obj3 + 5); // "305" (uses toString method)

// Array coercion
console.log([1, 2] + [3, 4]); // "1,23,4" (arrays to strings)
console.log([1] + 1); // "11"
console.log([10] - 5); // 5 (array to number)


// 7. NULL AND UNDEFINED COERCION

console.log(null + 5); // 5 (null coerced to 0)
console.log(undefined + 5); // NaN (undefined coerced to NaN)
console.log(null == 0); // false (special case)
console.log(undefined == 0); // false (special case)
console.log(null == undefined); // true (special case)


// 8. PRACTICAL EXAMPLES

// User input (always string from forms)
let userInput = '25';
let userAge = +userInput;
console.log(userAge + 5); // 30

// Checking conditions
let count = 0;
if (count) {
    console.log('Count exists');
} else {
    console.log('Count is 0 (falsy)');
}

// Concatenation vs addition
let price1 = 100;
let price2 = '200';
console.log(price1 + price2); // "100200" (concatenation)
console.log(price1 + Number(price2)); // 300 (addition)

// Default values
let name = '' || 'Guest';
console.log(name); // "Guest" (empty string is falsy)

let score = 0 || 100;
console.log(score); // 100 (0 is falsy)


// 9. COMMON PITFALLS

// Empty string is falsy but "0" is truthy
console.log(Boolean('')); // false
console.log(Boolean('0')); // true

// Empty array and object are truthy
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// NaN is not equal to itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Null vs undefined
console.log(typeof null); // "object" (JavaScript bug)
console.log(typeof undefined); // "undefined"


// Summary

/*
 * Type coercion is automatic type conversion by JavaScript
 * Plus operator (+) with strings causes string concatenation
 * Other math operators (-, *, /) cause number coercion
 * Falsy values: false, 0, "", null, undefined, NaN
 * All other values are truthy
 * Use === instead of == to avoid unexpected coercion
 * Be careful with + operator as it can concatenate or add
 * Understand coercion to avoid bugs in your code
 */

// TEMPLATE LITERALS IN JAVASCRIPT

/*
 * Q1: What are template literals?
 * 
 * A1: Template literals (also called template strings) are string literals 
 * that allow embedded expressions, multi-line strings, and string interpolation.
 * They are enclosed by backticks (``) instead of single ('') or double ("") quotes.
 * Introduced in ES6 (ECMAScript 2015).
 * 
 * Q2: What are the advantages of template literals?
 * 
 * A2:
 * String interpolation - Embed variables and expressions directly
 * Multi-line strings - Write strings across multiple lines without concatenation
 * Expression evaluation - Execute JavaScript expressions inside strings
 * Tagged templates - Create custom string processing functions
 * Cleaner syntax - More readable than string concatenation
 * 
 * Q3: How do template literals differ from regular strings?
 * 
 * A3:
 * Regular strings use quotes: 'text' or "text"
 * Template literals use backticks: `text`
 * Template literals support ${expression} for interpolation
 * Template literals preserve line breaks and spaces
 */


// 1. BASIC SYNTAX

// Regular strings
let str1 = 'Hello World';
let str2 = "Hello World";

// Template literal
let str3 = `Hello World`;

console.log(str1); // Hello World
console.log(str2); // Hello World
console.log(str3); // Hello World


// 2. STRING INTERPOLATION

// Old way - String concatenation
let firstName = 'Gyan';
let lastName = 'Prakash';
let oldWay = 'My name is ' + firstName + ' ' + lastName;
console.log(oldWay); // My name is Gyan Prakash

// New way - Template literal
let newWay = `My name is ${firstName} ${lastName}`;
console.log(newWay); // My name is Gyan Prakash

// Multiple variables
let nameIn = 'Gyan';
let age = 25;
let city = 'Bengaluru';
let intro = `I am ${nameIn}, ${age} years old, from ${city}`;
console.log(intro); // I am Gyan, 25 years old, from Bengaluru


// 3. EXPRESSION EVALUATION

// Arithmetic operations
let price = 100;
let quantity = 3;
let total = `Total: ${price * quantity} rupees`;
console.log(total); // Total: 300 rupees

// Mathematical expressions
let a = 10;
let b = 20;
let sum = `Sum: ${a + b}`;
console.log(sum); // Sum: 30

let result = `Result: ${a + b * 2}`;
console.log(result); // Result: 50

// Function calls
function greet(name) {
    return `Hello, ${name}!`;
}
let message = `${greet('Gyan')}`;
console.log(message); // Hello, Gyan!

// Ternary operator
let scoreIn = 85;
let grade = `Grade: ${scoreIn >= 90 ? 'A' : score >= 80 ? 'B' : 'C'}`;
console.log(grade); // Grade: B

// Comparison
let userAgeIn = 20;
let access = `Access: ${userAgeIn >= 18 ? 'Granted' : 'Denied'}`;
console.log(access); // Access: Granted


// 4. MULTI-LINE STRINGS

// Old way - Using concatenation and escape characters
let oldMultiLine = 'Line 1\n' +
    'Line 2\n' +
    'Line 3';
console.log(oldMultiLine);

// New way - Template literal
let newMultiLine = `Line 1
Line 2
Line 3`;
console.log(newMultiLine);

// Practical example - HTML template
let htmlTemplate = `
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
`;
console.log(htmlTemplate);

// Email template
let emailBody = `
Dear ${name},

Thank you for your purchase.
Order Total: ${price * quantity} rupees

Best regards,
Team
`;
console.log(emailBody);


// 5. NESTED TEMPLATE LITERALS

let products = ['Laptop', 'Phone', 'Tablet'];
let productList = `Products: ${products.map(item => `${item}`).join(', ')}`;
console.log(productList); // Products: Laptop, Phone, Tablet

// Complex nesting
let users = [
    { name: 'Gyan', age: 25 },
    { name: 'Prakash', age: 30 }
];
let userInfo = `Users: ${users.map(user => `${user.name} (${user.age})`).join(', ')}`;
console.log(userInfo); // Users: Gyan (25), Prakash (30)


// 6. ESCAPING BACKTICKS

// Using backslash to escape backtick
let escapedBacktick = `This is a backtick: \``;
console.log(escapedBacktick); // This is a backtick: `

let codeExample = `Use \`console.log()\` to print`;
console.log(codeExample); // Use `console.log()` to print


// 7. TAGGED TEMPLATES

// Basic tagged template
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}<strong>${values[i] || ''}</strong>`;
    }, '');
}

let userName = 'Gyan';
let userScore = 95;
let highlighted = highlight`User ${userName} scored ${userScore} marks`;
console.log(highlighted);

// Custom formatting
function currency(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let value = values[i];
        if (typeof value === 'number') {
            value = `Rs. ${value.toFixed(2)}`;
        }
        return `${result}${str}${value || ''}`;
    }, '');
}

let amount = 1500;
let formatted = currency`The amount is ${amount}`;
console.log(formatted); // The amount is Rs. 1500.00


// 8. PRACTICAL EXAMPLES

// Dynamic URLs
let userId = 123;
let apiUrl = `https://api.example.com/users/${userId}`;
console.log(apiUrl); // https://api.example.com/users/123

// SQL queries
let tableName = 'users';
let column = 'name';
let query = `SELECT * FROM ${tableName} WHERE ${column} = 'Gyan'`;
console.log(query); // SELECT * FROM users WHERE name = 'Gyan'

// Dynamic class names
let isActive = true;
let className = `btn ${isActive ? 'active' : 'inactive'}`;
console.log(className); // btn active

// JSON formatting
let person = {
    name: 'Gyan',
    age: 25,
    city: 'Bengaluru'
};
let jsonString = `${JSON.stringify(person, null, 2)}`;
console.log(jsonString);

// Date formatting
let today = new Date();
let dateString = `Today is ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
console.log(dateString);


// 9. BUILDING DYNAMIC CONTENT

// User card
function createUserCard(name, email, age) {
    return `
    <div class="user-card">
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Age: ${age}</p>
    </div>
  `;
}
console.log(createUserCard('Gyan', 'gyan@gmail.com', 25));

// Table rows
function createTableRow(id, name, price) {
    return `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>Rs. ${price}</td>
    </tr>
  `;
}
console.log(createTableRow(1, 'Laptop', 50000));

// Shopping cart
let items = [
    { name: 'Laptop', price: 50000, qty: 1 },
    { name: 'Mouse', price: 500, qty: 2 }
];
let cart = `
Shopping Cart:
${items.map(item => `${item.name} x${item.qty} = Rs. ${item.price * item.qty}`).join('\n')}
Total: Rs. ${items.reduce((sum, item) => sum + (item.price * item.qty), 0)}
`;
console.log(cart);


// 10. TEMPLATE LITERALS VS REGULAR STRINGS

// Concatenation comparison
let regularConcat = 'Name: ' + name + ', Age: ' + age + ', City: ' + city;
let templateLiteral = `Name: ${name}, Age: ${age}, City: ${city}`;

console.log(regularConcat);
console.log(templateLiteral);

// Both produce same output but template literal is more readable


// Summary

/*
 * Template literals use backticks (``) instead of quotes
 * Use ${expression} to embed variables and expressions
 * Support multi-line strings without escape characters
 * Can evaluate JavaScript expressions inside ${}
 * More readable and maintainable than concatenation
 * Support tagged templates for custom string processing
 * Preserve whitespace and line breaks
 * Perfect for HTML templates, dynamic content, and formatting
 */
