'use strict';

var fs = require('fs');

function readJSON(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      var parsed;
      if(err)
        return reject(err); 

      try { 
        parsed = JSON.parse(data); 
      } catch(err) { 
        return reject(err); 
      } 
      resolve(parsed); 
    });
  });
};

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

