// Closure do not capture the value, instead it takes the reference of the variable and get the value from that which is available at that moment

// EX:  

var teacher = 'Kyle'

function printTeacher(){
    console.log(teacher);
}

teacher = "Himel"

printTeacher() // it will print "Himel" but not the "Kyle"

// ************************************

// Closure inside of a forloop -> for, forOf, forIn

for(var i=1; i<=3; i++){
    setTimeout(function(){
        // console.log("i:", i);
    }, i * 1000);
}

// i: 4
// i: 4
// i: 4

// in the point of closure takes reference not capture value. in here it has three function but a single variable i and therefore it prints the last value of
// i: 4   3 times

// Key point to remeber that var does not open a block scope, so if we need to use a same variale for multiple time we neeed to make block scope,
// and in order to make block scope we need to use let or const

// in that specific case we would need to use let

for(var i=1; i<=3; i++){
    let j = i;
    setTimeout(function(){
        // console.log("j:", j);
    }, i * 1000);
}

// j: 1
// j: 2
// j: 3

// So here it creates a new variable for j in each iteration and the closure gets three different variable for each function.
// More easier way would be using the let instead of var which allows to create the scope block and new variables for each iteration 

for(let i=1; i<=3; i++){
    setTimeout(function(){
        console.log("i:", i);
    }, i * 1000);
}

// i: 1
// i: 2
// i: 3