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

// task=Feed+the+cat&dueDate=2020-06-26
// Allow Express.js to parse urlencoded data in the body of a request
// Used by forms
app.use(bodyParser.urlencoded({ extended: false }));

// Allow Express.js to parse JSON data in the body of a request
// Used by fetch api and client-side JavaScript (AJAX)
app.use(bodyParser.json());

app.get('/about', function (req, res) {
    res.render('about-us', { 
        title: 'About Us', 
        message: 'This is the about us page!'
    });
});

// /print
// message=Hello
app.get('/print', function (req, res) {
    let message = req.query.message;
    res.send('<h1>Your message was: ' + message + '</h1>');
});

// /numbers
app.get('/numbers', function (req, res) {
    let start = parseInt(req.query.start);
    let stop = parseInt(req.query.stop);

    let numbers = [];

    for (let i = start; i < stop; i++){
        numbers.push(i);
    }

    res.render('numbers', {
        numbers: numbers
    });
});

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

    let number = 10;

    studentRepo.createStudent(student1);

    res.redirect('/students');
});

app.get('/students', function(req, res) {
    let result = studentRepo.getStudents();

    res.render('students-list', {
        title: 'Student List',
        students: result
    });
});

// GET /students/details/1
// GET /students/details/2
// GET /students/details/?id=1
app.get('/students/details/:id', function(req, res) {
    const id = parseInt(req.params.id);

    const result = studentRepo.getStudentById(id);

    res.render('student/details', {
        title: 'Student Details',
        student: result
    });
});

app.post('/students/delete/:id', function(req, res) {
    const id = parseInt(req.params.id);

    studentRepo.deleteStudent(id);

    res.redirect('/students');
});

app.get('/tasks', function(req, res) {
    const tasks = [];

    tasks.push('Clean my room');
    tasks.push('Mark assignments');
    tasks.push('Remove weeds from garden');

    res.json(tasks);
});

app.post('/tasks', function(req, res) {
    // Log submitted form adata
    console.log(req.body);

    // Send back a status code to indicate that the task was created/saved
    // We use the 201 status code for this purpose
    res.status(201).end();
})

// Seed a few initial students in our system
studentRepo.createStudent(new Student('John', 'Smith', '1960-01-20', 'Programming'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))