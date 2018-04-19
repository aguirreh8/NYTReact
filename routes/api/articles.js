const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/saveArticle")
	.post(articlesController.saveArticle);

module.exports = router;