// TODO: write `findAll(..)`

const findAll = (match, values) =>{
    // const newValue = values.filter(value => {
    //     value == type;
    // });
    let newValue = [];
    
    for (const type of values) {
        if(Object.is(match,type)){
            newValue.push(type);
        }else if(type == null && match == null){
            newValue.push(type)
        }else if (typeof type == "boolean" && typeof match == "boolean"){
            if(match == type){
                newValue.push(type);
            }
        }
    }
    // console.log(newValue, "Index");
    return newValue;
}


// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true, 1);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true, 2);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true, 3);
console.log(setsMatch(findAll(-0,values),[-0]) === true, 4);
console.log(setsMatch(findAll(13,values),[13]) === true, 5);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true, 6);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true, 7);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true, 8);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true, 9);
console.log(setsMatch(findAll("",values),[""]) === true, 10);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true, 11);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true, 12);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true, 13);
console.log(setsMatch(findAll("true",values),["true"]) === true, 14);
console.log(setsMatch(findAll(true,values),[true]) === true, 15);
console.log(setsMatch(findAll(false,values),[false]) === true, 16);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true, 17);

console.log(setsMatch(findAll(null,values),[null,0]) === false, 18);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false, 19);
console.log(setsMatch(findAll(0,values),[0,-0]) === false, 20);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false, 21);
console.log(setsMatch(findAll(25,values),[25]) === false, 22);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false, 23);
console.log(setsMatch(findAll("",values),["",0]) === false, 24);
console.log(setsMatch(findAll("false",values),[false]) === false, 25);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false, 26);
console.log(setsMatch(findAll(true,values),[true,1]) === false, 27);
console.log(setsMatch(findAll(false,values),[false,0]) === false, 28);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}


// console.log(setsMatch(findAll(null,values),[null,undefined]) === true, 1);
// console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true, 2);
// console.log(setsMatch(findAll(0,values),[0,"0"]) === true, 3);
// console.log(setsMatch(findAll(-0,values),[-0]) === true, 4);

// findAll(null,values)
