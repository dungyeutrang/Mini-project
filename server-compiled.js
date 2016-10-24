'use strict';

require('babel-register');
var express = require('express');
var app = express();
app.use('/', express.static('public'));
app.listen(process.env.PORT || 3000);

//# sourceMappingURL=server-compiled.js.map