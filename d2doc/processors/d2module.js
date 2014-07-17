var _ = require('lodash');
var log = require('dgeni').log;
var path = require('canonical-path');

module.exports = {
    name: 'd2module',
    description: 'Change the module names to support the d2 directory structure',
    runAfter: ['tags-extracted'],
    runBefore: ['code-name'],
    process: function(docs, config) {

        _.forEach(docs, function(doc) {
            if (doc.module) {
                doc.module = 'd2-' + doc.module;
            }
        });

        return docs;
    }
};