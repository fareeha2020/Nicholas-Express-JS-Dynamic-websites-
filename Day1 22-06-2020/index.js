const express=require('express');
const app=express();
app.use(express.static('wwwroot'))
const port=3000;
app.listen(port,()=>console.log("For obtain data through forms and store intobrowser and display here at HTML"));

