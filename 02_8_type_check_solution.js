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
