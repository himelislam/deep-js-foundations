// double equla algo
// if the types are same it invokes the === check
// it prefers to do numaric operation to check the equality
// if there are any premitive type it will also invoke to change the type to premitive and then checking again with numaric and ===


const num1 = 16;
const num2 = [16];

// here it performs the num2 to toPremitive
// [16] -> "16"
// then it checks 16=="16"
// here it performs to toNumber Operation
// then 16==16
// then it invokes the ===
if(num1==num2){
    console.log("True");
}

// SUMMERY

// If types are same it uses ===
// if null or undefined -> equal      ----> null==undefined -> true   undefined==null -> true
// If there are non-premitive it performs toPrimitive
// Prefer: toNumber


const a=undefined;
const b= null;

if(a==b){
    console.log("hasdfas"); // true
}


// Corner Cases
// for cases like where i need to check an array if its true or false its better to use 
const hee = []
if(hee){
    //true
}

// instead of hee==true or hee==false. cz the algo for == preferes different methods to check the equality
// 

// NEVER CHECK == WITH TRUE OR FALSE


// AVOID

// 1. == with 0 or "" (or even " ")
// 2. == non-premitives
// 3. == true or == false; allow toNumber or use ===


