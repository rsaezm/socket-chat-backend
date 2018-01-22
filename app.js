var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();


app.use(express.static('wwwroot'))

app.get('/prueba', function (req, res) {
	res.status(200).json({ Funciona: true });
});

module.exports = app;
