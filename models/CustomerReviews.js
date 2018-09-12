var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * CustomerReview Model
 * =============
 */

var CustomerReview = new keystone.List('CustomerReview', {
	autokey: { from: 'customerName', path: 'key', unique: true },
	sortable: true
});

CustomerReview.add({
	customerName: { type: String },
	review: { type : Types.Html, wysiwyg : true, height : 300 }
});

CustomerReview.register();
