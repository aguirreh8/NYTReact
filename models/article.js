// Creates connection to mongoose package and creates new
// Schema constructor from it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model for articles to be saved, requires
// title and link, date is set to default to time
// it was created
const articleSchema = new Schema({
	title: { type: String, required: true },
	link: { type: String, required: true },
	date: { type: String, default: Date.now }
});

// Set model to MongoDB based on contructor above.
const Article = mongoose.model("Article", articleSchema);

// Export
module.exports = Article;