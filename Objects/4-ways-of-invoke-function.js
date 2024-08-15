// 4 ways of invoking a function

//*********************************************** */

// 1. Implicit binding

var workshop = {
    teacher: "Kyle",
    ask(question){
        console.log(this.teacher, question);
    }
}

workshop.ask("This is Implicit Binding")

// In this case the this keyword will point to the workshop context since it has been called with workshop context.
// Helpful for sharing function to multiple places.

function askAgain(question){
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Himel One",
    askAgain: askAgain 
}

var workshop2 = {
    teacher: "Himel Two",
    askAgain: askAgain 
}

workshop1.askAgain("Hello from")
workshop2.askAgain("Hello from")

// One function but different context

//*********************************************************** */

// 2. Explicit Bindling

// Almost same with the implicit way but in this case we are specifiying the context explicitly


function askAgain2(question){
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Himel One",
    askAgain2: askAgain2 
}

var workshop2 = {
    teacher: "Himel Two",
    askAgain2: askAgain2 
}

askAgain2.call(workshop1, "Explicit Way")
askAgain2.apply(workshop2, ["Explicit Way"])

// explicitly saying which context it should use in both the call and apply method.
// the one difference between call and apply is the second argument which call takes individually and apply takes as an Array.

// Variation of Explicit

// Hard Binding

var workshop3 = {
    teacher: "Himel Islam",
    askAgain3(question){
        console.log(this.teacher, question);
    }
}

// setTimeout(workshop3.ask, 10, "helllo"); // it will open the context in global since its an HTML setTimeOut cb function
// setTimeout(workshop3.ask.bind(workshop3), 10, "Hard Bound This"); // therefore we need to use the hard binding the include the context

//****************************************************************** */

// 3. new binding -> using new Keyword.
// Its basically invoking a function with a empty object concept. It invoke the function with a context of a empty object context.

function ask2(question){
    console.log(this.teacher, question);
}

const newEmptyObject = new ask2("Invoking this function with this keyword with a empty object context");
// undifined Invoking this function with this keyword with a empty object context  ---> res

// there are 4 steps of the process on `new` keyword

// 1. Create a brand new empty Object
// 2. * Link that object to another object
// 3. Call the function with referring the empty object as a `this`
// 4. If the function does not return an object it assume to return `this`

//******************************************************************** */
 
// 4. default binding

var nam = "Himel";

function one(arg){
    console.log(this.nam, arg);
}

function two(arg){
    "use strict";
    console.log(this.nam, arg);
}

one("Ine");
two("Ineee")

// *********************************************************************

// Important note to be covered. the order of this four function, which will be applied first 

// 1, we will check if there's any `new` keyword used then it will invoke with a empty object context
// 2. Check if the function called with `bind` or `call` with `apply` then it will invoke with provided context
// 3. check if the function is invoked with context object like workshop.ask() 
// 4. Lastly with default call with building shape global object.

// *********************************************************************



var workshop = {
    teacher: "Kyle",
    ask(question){
        setTimeout(()=>{
            console.log(this.teacher, question);
        }, 1000)
    }
}

workshop.ask("One");

var workshop = {
    teacher: "Kyle",
    ask: (question)=>{
        console.log(this.teacher, question);
    }
}

workshop.ask("One");
