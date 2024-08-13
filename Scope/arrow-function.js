var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

function getStudentbyId(studentId){
    return studentRecords.find(student => student.id == studentId)
}

function printRecords(recordId){
    recordId.map(getStudentbyId)
    .sort((record1, record2) => record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0)
    .map(record => console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`))
}

function paidStudentsToEnroll(){
    var filteredPaidId = studentRecords.filter(student => (student.paid && !currentEnrollment.includes(student.id))).map(record => record.id)
    return [...currentEnrollment,... filteredPaidId];
}

// function paidStudentsToEnroll(){
//     [
//         ...currentEnrollment,
//         ...(
//             studentRecords.filter(student => (student.paid && !currentEnrollment.includes(student.id))).map(record => record.id)
//         )
//     ]
// }

function remindUnpaid(recordId){
    var unpaidId = recordId.map(getStudentbyId)
    .filter(student => !student.paid)
    .map(student => student.id)
    printRecords(unpaidId);
}



printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/