let express = require('express'),
	load = require('express-load'),
	bodyParser = require('body-parser');

module.exports = () => {
	let app = express();

	app.use(express.static('./app/public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	load('routes', {cwd: 'app'})
	  .then('infra')
	  .into(app);

	return app;
}