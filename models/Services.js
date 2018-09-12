var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Services Model
 * =============
 */

var Services = new keystone.List('Services', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true
});

Services.add({
	name: { type: String, required: true },
	desc: { type : Types.Html, wysiwyg : true, height : 300 },
	icon: { type: String, required: true, 'default': 'fa-check'}
});

Services.defaultColumns = 'name|25%, header|25%, desc|25%, icon|25%' ;

Services.register();
