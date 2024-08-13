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

//****************************************** */

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

//****************************************************************** */