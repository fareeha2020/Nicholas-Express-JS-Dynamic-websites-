//just  writing a function for our student class here
let students=[];
 function createStudent(student){
    //we will do something with ur student object here,LATER
    students.push(student);//take the student and store it in our array
    //IN REAL PROJECT WE MIGHT SAVE THE DATA IN A DATABASE HERRE
}
function getStudent(){
    return students;
}
module.exports={createStudent,getStudent};