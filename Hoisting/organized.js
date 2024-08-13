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

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

function getStudentFromId(studentId){
    return studentRecords.find(findEnrolledStudent)

    function findEnrolledStudent(student){
        return (student.id == studentId);
    }
}



function printRecords(recordIds) {
    var records = recordIds.map(getStudentFromId)
    records.sort(sortByNameAsc)
    records.map(printRecord) 
}

function sortByNameAsc(record1, record2){
    if(record1.name < record2.name) return -1;
    else if(record1.name > record2.name) return 1;
    else return 0;
}

function printRecord(record){
    console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}


function paidStudentsToEnroll(){
    var paidStudentsList = studentRecords.filter(getPaidStudentList)
	var paidStudentsListId = paidStudentsList.map(getStudentId)

	return [...currentEnrollment, ...paidStudentsListId];
}

function getPaidStudentList(student){
    return (student.paid && !currentEnrollment.includes(student.id));
}

function getStudentId(student){
    return student.id;
}

function remindUnpaid(recordId){
	// var unpaidStudents = studentRecords.filter(function getUnpaidStudentList(student){
	// 	return(!student.paid && recordId.includes(student.id))
	// })

	// var unpaidIds = unpaidStudents.map(function getId(student){
	// 	return student.id;
	// })
	// printRecords(unpaidIds);

	var getUnpaidList = recordId.filter(notYetPaid)

	printRecords(getUnpaidList);
}

function notYetPaid(studentId){
    var record = getStudentFromId(studentId);
    return !record.paid
}



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


