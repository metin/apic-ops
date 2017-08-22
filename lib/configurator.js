'use strict';
var nyaml = require('node-yaml');
var fs = require('fs');

var Configurator = {
    configure: function(configs, yml_content) {

        if (!yml_content['x-ibm-configuration']) return yml_content;
        var props = yml_content['x-ibm-configuration']['properties'];
        for (var key in configs) {
            if (props.hasOwnProperty(key)) {
                props[key]['value'] = configs[key];
            }
        }
        return yml_content;
    }
}

module.exports = Configurator
