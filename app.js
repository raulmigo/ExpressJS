const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
})

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if(name) {
        res.redirect('/index');
    }
    res.render('hello');
})

app.post('/hello', (req, res) => {
    res.cookie('username',req.body.username);
    res.redirect('/');
    // console.log("hello.pug called")
})

app.get('/cards', (req, res) => {
    res.render('card', { 
        prompt: "Who is buried in Grants tomb?",
        hint: "Think about who's tomb it is",
        
    });
})

app.listen(3000, () => {
    console.log("The applciation is running on localhost 3000")
});