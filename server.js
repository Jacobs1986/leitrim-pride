const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require('./routes')
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes
app.use("/", routes)

app.listen(PORT, () => {
    console.log("🌎 ==> API server now on port " + PORT);
});