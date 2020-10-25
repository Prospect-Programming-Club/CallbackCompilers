const bodyParser = require('body-parser');
var express = require('express');
var ejs = require('ejs');
const { runInNewContext } = require('vm');
const { url } = require('inspector');
var app = express();

const views = __dirname + '/views/';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.render(getView('home.ejs'), {
        name: req.query.name
    })
})

app.get('/difficulty', (req, res) => {
    res.render(getView('difficulty.ejs'), {
        category: req.query.category
    })
})

app.get('/problem', (req, res) => {
    res.render(getView('problem.ejs'), {
        category: req.query.category,
        difficulty: req.query.difficulty
    })
    // do something here to start the problem generator
})

app.get('/chemistry', (req, res) => {
    res.render(getView('chemistry.ejs'));
})

app.post('/', urlencodedParser, (req, res) => {
    console.log(req);
    res.redirect('/'+ req.body.name);
})

// SAMPLE BELOW, copy for your own pages
 app.get('/math', (req, res) => {
     res.render(getView('math.ejs'))
 })

 app.post('/input', urlencodedParser, (req, res) => {
     console.log(req);
     res.redirect('/?name=' + req.body.name);
 })

app.post('/math', urlencodedParser, (req, res) => {
    console.log(req);
    res.redirect('/math');
})

app.post('/chemistry', urlencodedParser, (req, res) => {
    console.log(req);
    res.redirect('/chemistry');
})

app.post('/difficulty', urlencodedParser, (req, res) => {
    console.log(req);
    res.redirect('/difficulty?category='+req.query.category);
})

app.post('/problem', urlencodedParser, (req, res) => {
    console.log(req);
    res.redirect('problem?category='+req.query.category+'&difficulty='+req.query.difficulty);
})

// app.get('/about', (req, res) => {
//     res.sendFile(getView('about.html'))
//     // res.send('<h1>About Us</h1><p>This site is made with Node.js and Express</p>')
// })

function getView (fileName) {
    return views + fileName;
}

app.listen(8080);
