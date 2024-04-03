const name = '-0';

// "" = 0
// "0" = 0
// "-0" = -0
// "." = Nan 
// null = 0
// undifined = NaN
console.log(Number(name));

// Note for number it invoke the toPrimitive with a hint of number
// so the first it will invoke the valueOf() then the toString()

// [null] = first -> '' then -> 0
// [undefined] = first -> '' then -> 0

console.log([null].toString(), 'asd');
console.log('');