'use strict';

var fs = require('fs');
var co = require('co');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var readJSON = co.wrap(function*(filename) {
    var data = yield readFile(filename, 'utf8');
    var parsed = JSON.parse(data); 
    return parsed;
});

readJSON('test.json')
  .then( json => 
    console.log("File test.json parsed correctly: ", JSON.stringify(json))
  )
  .catch( err =>
    console.log("Error while reading test.json: ", err.message)   
  )

readJSON('test.txt')
  .then( json => 
    console.log("File test.txt parsed correctly: ", JSON.stringify(json))
  )
  .catch( err =>
    console.log("Error while reading test.txt: ", err.message)   
  )

readJSON('missing.json')
  .then( json => 
    console.log("File missing.json parsed correctly: ", JSON.stringify(json))
  )
  .catch( err =>
    console.log("Error while reading missing.json: ", err.message)   
  )