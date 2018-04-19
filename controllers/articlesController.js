// Require all exported models from models folder
const db = require("../models");

module.exports = {
	saveArticle: function(req, res) {
		db.Article.create(req.body)
		.then(article => res.json(article));
	},

	removeArticle: function(req, res) {
		db.Article.remove({ _id: req.params.id })
		.then(article => res.json(article));
	}
}