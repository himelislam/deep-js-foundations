// NaN -> invalid number

const age = Number("12") // 12
const name = Number('asad') // NaN

// NaN === NaN -> false;

// therefore we use isNaN() utility

isNaN(age) // false
isNaN(name) // true
isNaN("alaksdj") // true -> only isNaN will change the string to number then check the NaN value

// therefore -> 

console.log(Number.isNaN("asdfasdfas"));

// interesting note -> In JS the minus (-) will expect a number value, so the string 3 will be count a number 3
console.log(12 - "3"); // 9