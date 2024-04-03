var v;
console.log(typeof v); // "undefined"
v = "A";
console.log(typeof v); // "string"
v = 2;
console.log(typeof v); // "number"
v = true;
console.log(typeof v); // "boolean"
v = {}
console.log(typeof v); // "object"
v = Symbol()
console.log(typeof v); //"symbol"


// Note => the type of are turing unique sets of values but are only in strings, so while comparing with typeof with === needs to be handled carefully.
// for examaple typeof anValue === "undefined" would be the right way but not this typeof anValue === undefined 


typeof undeclaredVar;
console.log(typeof a);

var a = null;
console.log(typeof a, "null"); // returns value of empthy object cz initialy to unset any values like number developers used undefined and
// for objects they used null, that is why it returns empthy null;

a = function(){};
// console.log(typeof a, "function");

a = [1,2,3,4]
// console.log(typeof a, "array");

