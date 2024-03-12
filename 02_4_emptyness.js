// undefined
//--------------
// declered but not assigned any value or its a state which we can always set this to any valriable

// ex: var a; console.log(typeof a) // "undefined"



// undeclared
//---------
// when a variable has been declared

// ex: console.log(undeclaredVar) // undeclaredVar is not defined -> which is undeclared


// uninitialized aka TDZ

// TDZ stands for "Temporal Dead Zone". It's a concept in JavaScript that refers to the period between entering a scope and the declaration of a variable within that scope. During this time, if you try to access the variable, a ReferenceError will be thrown.


// function example() {
//     console.log(a); // Throws ReferenceError: Cannot access 'a' before initialization
//     let a = 10;
//   }
  
//   example();