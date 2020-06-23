const express = require('express');//npm install express --save
const bodyParser = require('body-parser');// npm install body-parser --save
const app = express();
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({ extended: false }));//need this body parser to access body of response in encoded format ,this should be above all handlers
const port = 3000;
app.get('/about', function (req, res) {
    res.send('<h1>This is the about us page!</h1>');
});//http://localhost:3000/about

app.get('/print', function (req, res) {
    /*print http://localhost:3000/print?message=Hello
 outputs on  browser page 'your message was Hello'*/
    let message = req.query.message;
    res.send('<h1>Your message was: ' + message + '</h1>');
});
// /numbers printing on webpage  http://localhost:3000/numbers?start=10&stop=15
app.get('/numbers', function (req, res) {
    /* SAME CAN BE USED ,create numbers-form.html
In form action='/number' does same thing numbers printing on webpage using input from form  http://localhost:3000/numbers-form.html*/
    let start = parseInt(req.query.start);
    let stop = parseInt(req.query.stop);
    let html = '<ul>';
    for (let i = start; i < stop; i++) {
        html += '<li>' + i + '</li>';
    }
    html += '</ul>';
    res.send(html);
});
//GET method ,forms will be GET:carries request parameter appended in URL string
//when they submit the form it will be POST:carries request parameter appended in message body(moreSecure)
app.get("/students/register", function (req, res) {
    /*this is app.get for GET request in FORM method="GET" 
    url is like http://localhost:3000/students/register?firstName=s&lastName=k&dob=0019-02-02&interest=Web*/
    res.send(req.query);//query string is with GET so like '.query' to access it.req.query will sidplay form data as it is
    //  let html = '<dl>';//determine description of each fields and send all back on website
    // html += '<dt>First nam is </dt><dd>' + req.query.firstName + '</dd>';
    // html += '<dt>Last nam is </dt><dd>' + req.query.lastName + '</dd>';
    // html += '<dt>DOB is </dt><dd>' + req.query.dob + '</dd>';
    // html += '<dt>Interested in </dt><dd>' + req.query.interest + '</dd>';
    // html += '</dl>';
    // res.send(html);
});

app.post("/students/register", function (req, res) {
    /*this is app.get for POST request in FORM method="POST"
    link generated is like 'http://localhost:3000/students/register/ so all request is in body(check f12 network,response)*/
    
    res.send(req.body);//displays as it is as JSON Object

    // let html = '<dl>';//determine description of each fields and send all back on website
    // html += '<dt>First nam is</dt><dd>' + req.body.firstName + '</dd>';
    // html += '<dt>Last  name is</dt><dd>' + req.body.lastName + '</dd>';
    // html += '<dt>DOB is </dt><dd>' + req.body.dob + '</dd>';
    // html += '<dt>Interested in </dt><dd>' + req.body.interest + '</dd>';
    // html += '</dl>';
    // res.send(html);
    
});

//app.listen should be always at the bottom
app.listen(port, () => console.log("For obtain data through forms and store intobrowser and display here at HTML"));

