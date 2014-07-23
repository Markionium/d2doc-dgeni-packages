var _ = require('lodash');
var log = require('dgeni').log;
var path = require('canonical-path');

module.exports = {
    name: 'git-path',
    description: 'Change the module names to support the d2 directory structure',
    runAfter: ['read-files'],
    runBefore: ['extract-tags'],
    process: function(docs, config) {
        _.forEach(docs, function(doc) {
            doc.gitPath = doc.relativePath;
            if (doc.relativePath && doc.relativePath.substr(0, 3) === '../') {
                doc.gitPath = doc.relativePath.substr(3);
            }
            if (doc.relativePath && doc.relativePath.substr(0, 7) === 'content') {
                doc.gitPath = 'doc/' + doc.relativePath;
            }
        });

        return docs;
    }
};
