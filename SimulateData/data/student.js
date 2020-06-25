//define a class here and export,we use export deafault if only one class
 class Student{
    constructor(fname,lname,dob,interest){
        this.firstName=fname;
        this.lastName=lname;
        this.dob=dob;
        this.interest=interest;
    }
}
module.exports=Student;