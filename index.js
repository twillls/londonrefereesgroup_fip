// solution adapted from: https://stackoverflow.com/questions/50195362/vue-history-mode-and-express-server-getting-404-error
// and vue docs about history mode

const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose:true
}));
app.use(staticFileMiddleware);

app.get('/', function(req, res) {
  res.render(path.join(__dirname + '/index.html'));
});

var server = app.listen(process.env.PORT || 5050, function () {
  var port = server.address().port;
  console.log("app now running on port", port);
})