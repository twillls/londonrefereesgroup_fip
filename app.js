const express = require('express');
const path = require('path');

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

const server = app.listen(port, () => {
	console.log(`app is running on ${port}`);
});
