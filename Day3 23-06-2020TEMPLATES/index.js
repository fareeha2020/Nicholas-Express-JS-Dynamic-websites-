const express = require('express');//npm install express --save
const bodyParser = require('body-parser');// npm install body-parser --save
const { request } = require('express');
const app = express();
app.set('views','./views')//in what folder to find our templates
app.set('view engine','hbs')//tell express JS which remplate to use.THis is handle bar 
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({ extended: false }));//need this body parser to access body of response in encoded format ,this should be above all handlers
const port = 3000;
app.get('/about', function (req, res) {
    res.render('about-us',{
        title:'hjyfjhvhvhv',
        message:'vhjdfjcvkjgluyfljhv.mnb;'

    });
    //if browser req this page http://localhost:3000/about above  responsevwill display 
});

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
    let numbers=[];
   
    for (let i = start; i < stop; i++) {
        numbers.push(i);
    }
  //http://localhost:3000/numbers-form.html enter start number and stop number ,submit will call this GET method
  //now for each time in a template we wrote code to display as list in numbers.hbs
  //what is going to render is determined by data send (in this example start,stop)
  //sending whole array to our .hbs
  //remenber render always refere just file name without extension as numbers not numbers.hbs
    res.render('numbers',{
        numbers:numbers
    });
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
    //here we are creating object of data we collect from FORM
   let student1={
       firstName:req.body.firstName,
       lastName:req.body.lastName,
       dob:req.body.dob,
       interest:req.body.interest,
   }
    //now render this using thisis the TEMPLATE I WANT TO RENDER,THIS IS THE DATA IAM GIVING
   res.render('student-details',{
       student:student1
   })
});

//app.listen should be always at the bottom
app.listen(port, () => console.log("For obtain data through forms and store intobrowser and display here at HTML"));

