console.log('---------Activity 1: Variable Declaration--------- \n Task 1: using var')
var num = 50;
console.log(num)

console.log('---------Activity 1: Variable Declaration--------- \n Task 2: using let')
let myStr = '30 Days JavaScript Challenge';
console.log(myStr)

console.log('---------Activity 2: Constant Declaration--------- \n Task 3: using const')
const constDec = false;
console.log('Boolean Value:',constDec)

console.log('---------Activity 3: Data Types--------- \n Task 4: Create Variables using different data types and find their type')
let number = 12;
console.log('1: ',typeof (number))

let myString = 'I love javaScript';
console.log('2: ',typeof (myString))

const myBool = false;
console.log('3: ',typeof(myBool))

const myObj = {
    courseName: '30 Days JavaScript Chanllenge',
    coursePrice: 'Free',
    courseBy: 'Hitesh Choudhary'
}
console.log('4: ',typeof (myObj))

const myArr = ['JavaScript', 10, true]
console.log('5: ',typeof(myArr))

console.log('---------Activity 4: Reassigning Variables--------- \n Task 5:')
let myVar = 20;
console.log(myVar)

//Reassigning Variable
myVar = 30;
console.log(myVar)

console.log('---------Activity 5: Understanding Const--------- \n Task 6:')
const myLang = 'JavaScript'
console.log(myLang)
myLang = 'Python' //TypeError: Assignment to constant variable.
console.log(myLang)
