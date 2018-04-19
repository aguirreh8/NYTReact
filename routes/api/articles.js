const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/saveArticle")
	.post(articlesController.saveArticle);

router.route("/getSavedArticles")
	.get(articlesController.getSavedArticles);

router.route("/removeArticle/:id")
	.delete(articlesController.removeArticle);

module.exports = router;