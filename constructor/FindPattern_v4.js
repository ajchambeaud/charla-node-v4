"use strict";

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var fs = require('fs');

class FindPattern extends EventEmitter{

  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }
  
  addFile(file) {
    this.files.push(file);
    return this;
  }
  
  find() {
    this.files.forEach( file => {
      fs.readFile(file, 'utf8', (err, content) => {
        if(err)
          return this.emit('error', err);
        this.emit('fileread', file);
        var match = null;
        if(match = content.match(this.regex))
          match.forEach(elem => this.emit('found', file, elem));
      });
    });
    return this;
  }
  
}

module.exports = FindPattern;
