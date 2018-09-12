var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		pageData: {},
		services: [],
		portfolio: []
	};

	view.on('init', function(next) {

		var q = keystone.list('FrontPage').model.findOne();

		//console.log('front page object:', q);

		q.exec(function(err, results) {
			//var swap = false;
			//if(Math.random() < 0.5){
			//	swap = true;
			//}
			////If we have both hero media slots taken, choose one at random and assign it to heroMedia
			//if(swap && results && results.heroMedia && results.heroMedia2 && results.heroMedia.url && results.heroMedia2.url){
			//	results.heroMedia = results.heroMedia2;
			//}
			//if(swap && results && results.videoPoster && results.videoPoster2 && results.videoPoster.url && results.videoPoster2.url){
			//	results.videoPoster = results.videoPoster2;
			//}


	
			locals.data.pageData = results;
			//locals.pageTitle = results.pageTitle ;
			//locals.metaDescription = results.metaDescription ;
			next(err);
		});
	});

	view.on('init', function(next) {

		var q = keystone.list('Services').model.find().sort('sortOrder');

		q.exec(function(err, results) {
			locals.data.services = results;
			next(err);
		});
	});

	view.on('init', function(next) {

		var q = keystone.list('Portfolio').model.find().sort('sortOrder');

		q.exec(function(err, results) {
			locals.data.portfolio = results;
			next(err);
		});
	});

	view.on('init', function(next) {

		var q = keystone.list('CustomerReview').model.find().sort('sortOrder');

		q.exec(function(err, results) {
			locals.data.customerReviews = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
