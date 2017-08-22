'use strict';
var nyaml = require('node-yaml');
var fs = require('fs');

var Reader = {
    read: function(file) {

        if (!fs.existsSync(file)) {
            throw("ERROR: File " + file + " does not exist!");
        }

        return nyaml.read(file);
    },
    readSync: function(file) {

        if (!fs.existsSync(file)) {
            throw("ERROR: File " + file + " does not exist!");
        }

        return nyaml.readSync(file);
    }
}

module.exports = Reader
