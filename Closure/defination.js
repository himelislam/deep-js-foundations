// CLOSURE

// Closdure is a when a function remebers it's lexical scope even when the function is executed outside that lexical scope

// EX:

function ask(question){
    setTimeout(function waitASec(){
        console.log(question);
    })
}

ask("Hello");

// here the on first time when the ask gets called it runs the code but in waitASec function had the closure value of quesition from the ask function scope 
// even the ask function has been done

// EX:

function askAgain(quesition){
    return function holdTheQuestion(){
        console.log(quesition);
    }
}

const theQuestion = askAgain("Hello???");

theQuestion();

// here the holdTheQuestion function remebers the lexical scope of askAgain funtion even the function has been done on line 26.
// But on 28 theQuestion function remembers the lexical scope of askAgain function and console.log it as expected.

