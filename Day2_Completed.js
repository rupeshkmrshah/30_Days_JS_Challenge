console.log('Activity 1: Arithmetic Operators')
console.log("Task 1: Add two Numbers");
const num1 = 10;
const num2 = 20;
console.log(num1  +  num2)

console.log("Task 2: Subtract two Numbers");
console.log(num2  -  num1)

console.log("Task 3: Multiply two Numbers");
console.log(num1  *  num2)

console.log("Task 4: Divide two Numbers");
console.log(num2  /  num1)

console.log("Task 5: Find remainder");
console.log(num2  %  num1)

console.log('Activity 2: Assignment Operators')
console.log("Task 6: Use of += to add a number to a variable");
let add = 10
console.log(add += 2)

console.log("Task 7: Use of -= to subtract a number to a variable");
let sub = 10
console.log(sub -= 2)

console.log('Activity 3: Comparison Operators')
console.log("Task 8: Use of '<' and '>' to add a number to a variable");

console.log('Comparison Operators using ">": ',10 > 50)
console.log('Comparison Operators using "<": ',10 < 50)

console.log("Task 9: Use of '>=' and '<=' to add a number to a variable");
console.log('Comparison Operators using ">=": ',10 >= 50)
console.log('Comparison Operators using "<=": ',10 <= 50)

console.log("Task 10: Use of '==' and '===' to add a number to a variable");
console.log('Comparison Operators using "==": ',60 == 50)
console.log('Comparison Operators using "===": ',"60" == 50)


console.log('Activity 11: Logical Operators')
console.log("Task 9: Use of && operator to combine two conditions");
let num3 = 10;
let num4 = 6
let num5 = 9
let num6 = 5
console.log(num3 > num5 && num6 < num4)

console.log("Task 12: Use of || operator to combine two conditions");
console.log(num4 < num6 || num3 > num5)

console.log("Task 13: Use of ! operator to negate a conditions");
console.log(!num3)

console.log("Task 14: Use of ternary operator to check a number +ve or -ve");
let num7 = 5
console.log(num7 < 0 ? 'Negative' : 'Positive')
