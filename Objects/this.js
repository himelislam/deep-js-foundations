// NOTE: The this keyword based upon how the function is being called
// the this keyword is primarily used so we can invoke any function with different context from different places.


// var teacher = "Kyle"

// function ask(question){
//     console.log(teacher, question);
// }

// function otherClass(){
//     var teacher = "Suzy"
//     ask("Why?")
// }

// otherClass();
// Kyle Why -> because of lexical scope of ask function which gets the value from his parent scope of teacher Kyle.


//***************************************** */

var teacher = "Kyle"

function ask(question){
    console.log(this.teacher, question);
}

function otherClass(){
    var myContext = {
        teacher : "Suzy"
    }
    ask.call(myContext, "Why?")
}

otherClass(); 

// Here the ask function hold a this keyword and while calling the ask function we have send the context which i wish to use for that function execution
// Therefore it logs Suzy Why? instead of Kyle Why?






