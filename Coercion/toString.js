function hi(){
    // console.log('Hello');
}

// console.log(typeof hi.toString()); // string

 
// Notes for the Coercion -> basically it means to primitive type conversions
// the algo is toPrimitive(hint)

// if I want to change the type or an Object or Array value it will first invoke the 
// -> toString() then if theres nothing then the valueOf()

// for Array ex:

// [] = ""
// [1,2,3] = "1,2,3"
//[null, undifined] = ","

const nul = {
    name: 'Himel'
};

console.log(JSON.stringify(nul));

// console.log({toString(){return "x"}});
 


// there are two methods -> toString() and the valueOf()
