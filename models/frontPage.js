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
	header : { type : String },
	subHeader : { type : String },
	navLogo: { type : Types.CloudinaryImage },
	headerCarouselImage1: { type: Types.CloudinaryImage },
	headerCarouselImage2: { type: Types.CloudinaryImage },
	featuredArtistImage: { type: Types.CloudinaryImage },
	contactImage: { type: Types.CloudinaryImage },
	aboutImageHeight: { type: Number, required: true, 'default': 150 },
	aboutImageWidth: { type: Number, required: true, 'default': 150 },
	aboutJohnZarsky: { type : Types.Html, wysiwyg : true, height : 200, 'default': 'This section will be about John Zarsky' },
	contactInfo: {
		desc: { type : Types.Html, wysiwyg : true, height : 200 },
		city: { type: String },
		number: { type: String },
		email: { type: String }
	}
});

FrontPage.register();
