"use strict";

var _ = require('lodash');
var log = require('dgeni').log;
var path = require('canonical-path');

module.exports = {
    name: 'git-settings',
    description: 'Change the module names to support the d2 directory structure',
    runAfter: ['read-files'],
    runBefore: ['extract-tags'],
    process: function(docs, config, extraData) {
        var git, gitConfig;

        gitConfig = config.git || {};
        git = {};

        git.user = gitConfig.user || 'Markionium';
        git.repo = gitConfig.repo || 'd2';
        git.branch = gitConfig.branch || 'master';

        _.forEach(docs, function(doc) {
            doc.git = {};
            doc.git.path = doc.relativePath;
            if (doc.relativePath && doc.relativePath.substr(0, 3) === '../') {
                doc.git.path = doc.relativePath.substr(3);
            }
            if (doc.relativePath && doc.relativePath.substr(0, 7) === 'content') {
                doc.git.path = 'doc/' + doc.relativePath;
            }
        });

        extraData.git = git;

        return docs;
    }
};
