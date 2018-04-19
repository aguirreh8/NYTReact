const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mogoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Send every request to the React app
// Define any API routes before this runs

app.use(routes);

mogoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytsreact");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
