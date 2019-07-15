var express = require('express');
var bp = require('body-parser');
var path = require ('path');
var app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bp.json());

require('./server/config/mongoose_server.js');
require('./server/config/routes.js')(app);

app.listen(8888, function(){
  console.log('server listening on port', 8888);
});
