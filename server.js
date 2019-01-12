// Key:
// 3f512a426170f3b1734a0f4d2dbf5048

// Secret:
// 7a23164b892572de

const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view-engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
     res.render('home.hbs');
});

app.get('/about', (req, res) => {
     res.render('about.hbs');
});

app.get('*', (req, res) => {
	res.redirect('/');
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});