const express = require('express');
const app = express();
app.use(express.static('wwwroot'))
const port = 3000;
app.get('/about', function (req, res) {
    res.send('<h1>This is the about us page!</h1>');
});//http://localhost:3000/about
// /print http://localhost:3000/print?message=Hello
// message=Hello
app.get('/print', function (req, res) {
    let message = req.query.message;
    res.send('<h1>Your message was: ' + message + '</h1>');
});
// /numbers printing on webpage  http://localhost:3000/numbers?start=10&stop=15
// / SAME CAN BE USED ,create numbers-form.html
//In form action='/number' does same thing numbers printing on webpage using input from form  http://localhost:3000/numbers-form.html
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
app.listen(port, () => console.log("For obtain data through forms and store intobrowser and display here at HTML"));

