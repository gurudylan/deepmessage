module.exports = app => {

	app
	  .route('/login')
	  .get((req, res) => res.render('home/login'))
	  .post('/login', (req, res) => console.log("Olá mundo"));
}