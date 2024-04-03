// NaN -> invalid number

const age = Number("12") // 12
const name = Number('asad') // NaN

// NaN === NaN -> false;

// therefore we use isNaN() utility

isNaN(age) // false
isNaN(name) // true
isNaN("alaksdj") // true -> only isNaN will change the string to number then check the NaN value

// therefore -> 

// console.log(Number.isNaN("asdfasdfas"));

// interesting note -> In JS the minus (-) will expect a number value, so the string 3 will be count a number 3
// console.log(12 - "3"); // 9


// NaN is the only value which is not equal to itself

// NaN === NaN -> false


console.log(Number.isNaN("Hello")) // false -> it does not converts the string to number and shows the actual Value if it's NaN or Not.
console.log(isNaN("Hello")) // true  -> it converts the string to Number then check the value