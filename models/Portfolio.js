var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * =============
 */

var Portfolio = new keystone.List('Portfolio', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true
});

Portfolio.add({
	name: { type: String },
	desc: { type : Types.Html, wysiwyg : true, height : 300 },
	image: { type: Types.CloudinaryImage },
});

Portfolio.register();
