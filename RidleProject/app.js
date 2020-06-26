const express = require('express');//npm install express --save
const bodyParser = require('body-parser');// npm install body-parser --save
const { response } = require('express');
const app = express();
app.set('views','./views')//in what folder to find our templates
app.set('view engine','hbs')//tell express JS which remplate to use.THis is handle bar 
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));//need this body parser to access body of response in encoded format ,this should be above all handlers

const port=4000;
// app.get('/riddles/:level/:number', function(req, res) {
//     // const id = parseInt(req.params.idIsVariableName);
//     // const result = studentRepo.getStudentById(id);
//     // res.render('student-details', {
//     //     title: 'Student Details',
//     //     student: result
//     // });
// });

app.post('/riddles',function(req,res){
     //grab it from body of POST by NAME specified in FORM
    let level=req.body.riddlesLevel;
    let number=req.body.riddlesNumber;
    //construct a string for URL
    let dest='/riddles/'+level+"/"+number;
    res.redirect(dest);
});
app.get('/riddles/:level/:number',function(req,res){
    let lev=req.params.level;
    let num=req.params.number;
    console.log(`${lev} ${num}`)
    //mutiple templates easy : for diff condotiond if easy 
    if(lev=='Easy' && num=='Eight'){
        res.redirect('/riddle.html');
    }
    else if(lev=='Hard' && num=='Eight')
    {
        res.render('riddles',
        {
            h1:'The Riddles are requested for',
            lev:lev,
            num:num,
        });
    }
    else if(lev=='Easy' && num=='Four')
    {
        res.render('easyFour',
        {
            h1:'The Riddles are requested for',
            lev:lev,
            num:num,
        });
    }
    else if(lev=='Hard' && num=='Four')
    {
        res.render('hardFour',
        {
            h1:'The Riddles are requested for',
            lev:lev,
            num:num,
        });
    }
});
app.listen(port,function(){
    console.log(`the express server is listening :http://localhost:${port}`);
});
