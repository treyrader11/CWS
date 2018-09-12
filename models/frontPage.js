var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * FrontPage Model
 * =============
 */

var FrontPage = new keystone.List('FrontPage', {
	autokey: { from: 'name', path: 'key', unique: true},
	nocreate: true,
	nodelete: true
});

FrontPage.add({
	//name: { type: String, required: true, 'default': 'CWS Front Page' },
	name: { type: String, required: true },
	pageTitle : { type : String },
	headerQuoteOne : { type : String },
	headerQuoteTwo : { type : String },
	headerQuoteThree : { type : String },
	headerQuoteFour : { type : String },
	navLogo: { type : Types.CloudinaryImage },
	headerBackgroundImage: { type: Types.CloudinaryImage },
	headerImage: { type: Types.CloudinaryImage },
	aboutHeader: { type: String, required: true, 'default': 'About Company Page'},
	aboutImage: { type: Types.CloudinaryImage },
	aboutImageHeight: { type: Number, required: true, 'default': 150 },
	aboutImageWidth: { type: Number, required: true, 'default': 150 },
	ourValuesImage: { type: Types.CloudinaryImage },
	ourValuesImageHeight: { type: Number, required: true, 'default': 150 },
	ourValuesImageWidth: { type: Number, required: true, 'default': 150 },
	aboutIcon: { type: String, 'default': 'glyphicon glyphicon-signal'},
	aboutTopDesc: { type : Types.Html, wysiwyg : true, height : 200 },
	aboutBottomDesc: { type : Types.Html, wysiwyg : true, height : 200 },
	ourValuesHeader: { type: String, required: true, 'default': 'Our Values'},
	ourValuesIcon: { type: String, 'default': 'glyphicon glyphicon-globe'},
	missionStatement: { type : Types.Html, wysiwyg : true, height : 200 },
	visionStatement: { type : Types.Html, wysiwyg : true, height : 200 },
	serviceHeader: { type: String, required: true, 'default': 'Services'},
	portfolioHeader: { type: String, required: true, 'default': 'Portfolio'},
	portfolioDesc: { type : Types.Html, wysiwyg : true, height : 200 },
	customerReviewsHeader: { type: String, required: true, 'default': 'What Our Customers Say'},
	pricingHeader: { type: String, required: true, 'default': 'Pricing'},
	pricingDesc: { type : Types.Html, wysiwyg : true, height : 200, 'default': 'Choose a plan that works for you' },
	contactHeader: { type: String, required: true, 'default': 'Contact'},
	contactInfo: {
		desc: { type : Types.Html, wysiwyg : true, height : 200 },
		city: { type: String },
		number: { type: String },
		email: { type: String }
	}
});

FrontPage.register();
