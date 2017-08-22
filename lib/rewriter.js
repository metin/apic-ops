'use strict';
var nyaml = require('node-yaml');
var fs = require('fs');
'use strict';
var Rewriter = {
    rewrite: function(content, yaml_file) {

        nyaml.write(yaml_file, content).then(function() {
            console.log("written to: " + yaml_file);
        }).catch(function(e) {
           console.log("Failed to write:"+ yaml_file);
           console.log(e);
        });
    }
}

module.exports = Rewriter
