function typeCheck(first,second){
    
    if(isNaN(first) === isNaN(second)){
        return true
    }else if(first !== Infinity){

    }
    else if(first === second){
        return true
    }else{
        return false
    }
}

// console.log(-0 !== -Infinity);

// console.log(typeCheck(NaN,NaN));

// console.log(typeCheck(42,42));
// console.log(typeCheck("foo","foo"));
// console.log(typeCheck(false,false) );
// console.log(typeCheck(null,null) );
// console.log(typeCheck(undefined,undefined) );
// console.log(typeCheck(NaN,NaN) )
// console.log(typeCheck(-0,-0) );
// console.log(typeCheck(0,0) );

// console.log(typeCheck(-0,0), "false");
// console.log(typeCheck(0,-0));
// console.log(typeCheck(0,NaN));
// console.log(typeCheck(NaN,0));
// console.log(typeCheck(42,"42"));
// console.log(typeCheck("42",42));
// console.log(typeCheck("foo","bar"));
// console.log(typeCheck(false,true));
// console.log(typeCheck(null,undefined));
// console.log(typeCheck(undefined,null));


// solution

if (!Object.is /*|| true*/) {
	Object.is = function ObjectIs(x,y) {
		var xNegZero = isItNegZero(x);
		var yNegZero = isItNegZero(y);

		if (xNegZero || yNegZero) {
			return xNegZero && yNegZero;
		}
		else if (isItNaN(x) && isItNaN(y)) {
			return true;
		}
		else if (x === y) {
			return true;
		}

		return false;

		// **********

		function isItNegZero(x) {
			return x === 0 && (1 / x) === -Infinity;
		}

		function isItNaN(x) {
			return x !== x;
		}
	};
}

function ObjectisDemo(x,y){
    let xNegativeZero = isItNegativeZero(x)
    let yNegativeZero = isItNegativeZero(y)

    if(xNegativeZero || yNegativeZero){
        return xNegativeZero && yNegativeZero
    }else if(isItNaNvalue(x) && isItNaNvalue(y)){
        return true
    }else if(x === y){
        return true;
    }

    return false;

    function isItNegativeZero(x){
        return x === 0 && (1 / x) === -Infinity;
    }

    function isItNaNvalue(x){
        return Number.isNaN(x)
        // or return x !== x;
    }
}


// tests:
console.log(ObjectisDemo(42,42) === true);
console.log(ObjectisDemo("foo","foo") === true);
console.log(ObjectisDemo(false,false) === true);
console.log(ObjectisDemo(null,null) === true);
console.log(ObjectisDemo(undefined,undefined) === true);
console.log(ObjectisDemo(NaN,NaN) === true);
console.log(ObjectisDemo(-0,-0) === true);
console.log(ObjectisDemo(0,0) === true);

console.log(ObjectisDemo(-0,0) === false);
console.log(ObjectisDemo(0,-0) === false);
console.log(ObjectisDemo(0,NaN) === false);
console.log(ObjectisDemo(NaN,0) === false);
console.log(ObjectisDemo(42,"42") === false);
console.log(ObjectisDemo("42",42) === false);
console.log(ObjectisDemo("foo","bar") === false);
console.log(ObjectisDemo(false,true) === false);
console.log(ObjectisDemo(null,undefined) === false);
console.log(ObjectisDemo(undefined,null) === false);

console.log(-0 && -0);