add()
function add(){
    const number = 14;
    // console.log(`The Number is ${number + ""}`);
}

// Note if we use the plus operator with string value then it convert the values with the toString() method

// console.log(typeof 123 + "");

const newName = 123 + "";

const obj = [1,2,3,4,5,6,7,89]

// console.log(typeof [obj].join(""));

// console.log(typeof newName); // string

// interesting fact to stringify -> [value].join("")

//add()
// function add(){
//     const number = 14;
//     console.log(`The Number is ${[number].join("")}`);
// }

add2()
function add2(){
    const number = 15;
    // console.log(`The Number is ${number.toString()}`);
}

add3()
function add3(){
    const number = 16;
    // console.log(`The Number is ${String(number)}`);
}


// -------------

// Another case for the stirng to number

// case one

function addStd(numStudent){
    return numStudent + 1;
}



console.log(addStd("16")); // "161" -> so it coercion to srting 
console.log(addStd(+"16")); // "17" -> now before sending the param we can forcefully invoke the toNumber coercion

 