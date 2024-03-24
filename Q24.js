let apple = "apple";
let upperCaseApple = "APPLE";
let Ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Tests for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
// test for inequality
console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");
// Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting into lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log(upperCaseApple.toLowerCase() != "apple");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n Is ten is equal to twenty?");
console.log(Ten == twenty);
console.log("\n Is ten is not equal to twenty?");
console.log(Ten != 20);
// greater or 
console.log("\n Is Ten greater then zero?");
console.log(Ten > 0);
// less then
console.log("\n Is twenty less then 10?");
console.log(20 < 10);
// greater then or equal to
console.log("\n Is Ten is greater then or equal to five?");
console.log(Ten >= 5);
// less then or equal to
console.log("\n twenty is less then or equal to Ten?");
console.log(20 <= 10);
// Tests using "and" and "or" operators
console.log("\n twenty is  equal to Ten and twenty is greater then Ten");
console.log(twenty == 10 && 20 > 10);
console.log("\n twenty is not equal to Ten and twenty is greater then Ten");
console.log(twenty != 10 && 20 > 10);
// using || (nor)
console.log("\n 20 is greater then 50 or twenty is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater then 50 or twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);
//  Test whether an item is in a array
console.log("\n Is orange include in my fruits array?");
console.log(fruits.includes("orange"));
// Test whether an item is not in a array
console.log("\n Is orange not include in my array?");
console.log(!fruits.includes("orange"));
export {};
