var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
  secret: new Buffer('3Cy2RZ1VpaBTj4DNsU3v6bBo9NsLzZCBjbHpWeAWO_UxXM7mK0EAD_bXhkMxi72E', 'base64'),
  audience: 'eGYuU4jMvlL1VuypqlBeaGJc70Q18nfy'
});

app.get('/api/public', function(req, res) {
  res.json({ message: 'Hello from a public endpoint.'})
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: 'Hello from a private endpoint.'})
});

app.listen(3002);
console.log('Listening on http://localhost/3002');
