var fs = require('fs');

function readJSON(filename, callback) {
  fs.readFile(filename, 'utf8', function(err, data) {
    var parsed;
    if(err)
      return callback(err); 
    try { 
      parsed = JSON.parse(data); 
    } catch(err) { 
      return callback(err); 
    } 
    callback(null, parsed); 
  });
};

readJSON('test.json', function(err, json) {
	if(err) {
		console.log("Error while reading test.json: " + err.message);
	} else {
		console.log("File test.json parsed correctly: " + JSON.stringify(json));
	}
});

readJSON('test.txt', function(err, json) {
	if(err) {
		console.log("Error while reading test.txt: " + err.message);
	} else {
		console.log("File test.txt parsed correctly: " + JSON.stringify(json));
	}
});

readJSON('missing.json', function(err, json) {
	if(err) {
		console.log("Error while reading missing.json: " + err.message);
	} else {
		console.log("File missing.json parsed correctly: " + JSON.stringify(json));
	}
});