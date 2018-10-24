var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Services Model
 * =============
 */

var TourDates = new keystone.List('TourDates', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true
});

TourDates.add({
	venue: { type: String },
	city: { type: String },
	state: { type : String },
	month: { type: String },
	day: { type: Number },
	year: { type: Number }
});

TourDates.defaultColumns = 'venue|20%, city|20%, state|20%, month|20%, day|10%, year|10%' ;

TourDates.register();
