var mongoose = require('mongoose');
var fs = require('fs');
var path = require ('path');

mongoose.connect('mongodb://localhost/ForumDB')
require('../models/models.js')
