var teacher = "Kyle"
teacher = "Joe" // allowd

const myTeacher = "Kyle"
myTeacher = "Joe" // TypeError

// But

const teachers = ["Kyle", "Joe"]
teacher[1] = "Imran" // allowed

// So const doesn't allows to assign a value but allows to change mutable values like array, objects
// const is best for immutable premitive values like number, string and boolean