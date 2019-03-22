const express = require('express')
const hbs = require('hbs')

let app = express();

hbs.registerPartials(__dirname+"/views/partials")
app.set('view engine', 'hbs')
app.use(express.static(__dirname+"/public"));
hbs.registerHelper("getCurrentYear",()=>{
    return new Date().getUTCFullYear()
})

app.get('/',(req,res)=>{

    // res.send('<h1>Hello world</h1>')
    res.render('welcome.hbs',{
        pageTitle: "Welcome to my website", 
    })
});

app.get('/bad',(req,res)=>{

    res.send({
        errorMessage: 'Unable to handle server'
    })
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: "Hello world",
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})