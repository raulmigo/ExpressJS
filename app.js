const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/hello', (req, res) => {
    res.render('hello');
    // console.log("hello.pug called")
})

app.post('/hello', (req, res) => {
    res.render('hello');
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