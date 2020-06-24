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

