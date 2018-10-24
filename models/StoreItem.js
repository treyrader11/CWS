var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var StoreItem = new keystone.List('StoreItems', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

StoreItem.add({
	title: { type: String },
	//state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	//author: { type: Types.Relationship, ref: 'User', index: true },
	//publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	price: { type: String },
	image: { type: Types.CloudinaryImage },
	caption: { type: Types.Html, wysiwyg: true, height: 150 }
});

StoreItem.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

StoreItem.defaultColumns = 'title, price|20%, image|20%, caption|20%';
StoreItem.register();
