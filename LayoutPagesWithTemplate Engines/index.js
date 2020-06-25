const express = require('express')
const bodyParser = require('body-parser')
const Student = require('./data/student')
const studentRepo = require('./data/studentRepository')
const app = express()
const port = 3000
// Tell Express.js in which folder to find our templates
app.set('views', './views')
// Tell Express.js which template engine to use.  This one is
// Handlebars
app.set('view engine', 'hbs');
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({ extended: false }))
// app.get('/about', function (req, res) {
//     res.render('about-us', { 
//         title: 'About Us', 
//         message: 'This is the about us page!'
//     });
// });
// // /print
// // message=Hello
// app.get('/print', function (req, res) {
//     let message = req.query.message;
//     res.send('<h1>Your message was: ' + message + '</h1>');
// });
// // /numbers
// app.get('/numbers', function (req, res) {
//     let start = parseInt(req.query.start);
//     let stop = parseInt(req.query.stop);
//     let numbers = [];
//     for (let i = start; i < stop; i++){
//         numbers.push(i);
//     }
//     res.render('numbers', {
//         numbers: numbers
//     });
// });
app.get('/students/register', function(req, res) {
    res.render('student-register', { title: 'Student Register' });
});
app.post('/students/register', function (req, res) {
    let student1 = new Student(
        req.body.firstName,
        req.body.lastName,
        req.body.dob,
        req.body.interest
    );
   // let number = 10;
    studentRepo.createStudent(student1);
    res.redirect('/students');
});

app.get('/students', function(req, res) {
    let result = studentRepo.getStudents();
   //challenge set title with StudentName
    res.render('students-list', {
        title: 'Student List',
        students: result
    });
});

 /* Creating Dynamic  routing parameters as Id's like below
 GET /students/details/1
 GET /students/details/2
 GET /students/details/?id=1*/
{/* <a href="/students/details/{{ this.id }}">Details</a>
creating to GET this on details so below  will get called*/}
app.get('/students/details/:idIsVariableName', function(req, res) {
    const id = parseInt(req.params.idIsVariableName);
    const result = studentRepo.getStudentById(id);
    res.render('student-details', {
        title: 'Student Details',
        student: result
    });
});

{/* DELETE button will call this
    <form action="/students/delete/{{ this.id }}" method="POST">
<button type="submit">Delete</button> */}
app.post('/students/delete/:id', function(req, res) {
    const id = parseInt(req.params.id);

    studentRepo.deleteStudent(id);

    res.redirect('/students');
});

// Seed a few initial students in our system
studentRepo.createStudent(new Student('John', 'Smith', '1960-01-20', 'Programming'));
studentRepo.createStudent(new Student('John2', 'Smith2', '1960-02-20', 'web'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))