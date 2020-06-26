let students = [];
let studentId = 1;

function generateStudentId() {
    const nextId = studentId;
    studentId++;
    return nextId;
}

function getStudents() {
    return students;
}

function createStudent(student) {
    student.id = generateStudentId();

    // Take the student and store it in our array
    students.push(student);

    // In a real project we might save the data in a database here
}

function getStudentById(id) {
    for (student of students) {
        if (student.id === id) {
            return student;
        }
    }

    throw 'The student was not found!';
}

function deleteStudent(id) {
    for (let i = students.length - 1; i >= 0; i--) {
        if (students[i].id === id) {
            students.splice(i, 1);
        }
    }
}

module.exports = { createStudent, getStudents, getStudentById, deleteStudent }