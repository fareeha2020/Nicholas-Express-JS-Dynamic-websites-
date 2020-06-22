const express=require('express');
const app=express();
app.use(express.static('wwwroot'))
const port=3000;
app.get('/about', function (req, res) {
    res.send('<h1>This is the about us page!</h1>');
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
    let html = '<ul>';
    for (let i = start; i < stop; i++) {
        html += '<li>' + i + '</li>';
    }
    html += '</ul>';
    res.send(html);
});
//app.listen should be always at the bottom
app.listen(port,()=>console.log("For obtain data through forms and store intobrowser and display here at HTML"));

