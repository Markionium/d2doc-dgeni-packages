var INLINE_NOTE = /(.+?)\n(.+)?/;

module.exports = {
    name: 'note',
    description: 'Process inline note tags (of the form {@link some/uri Some Title}), replacing them with HTML anchors',
    handlerFactory: function(partialNames) {

        return function handleLinkTags(doc, tagName, tagDescription) {

            // Parse out the uri and title
            return tagDescription.replace(INLINE_NOTE, function(match, title, text) {

                return '<div><h4>' + title + '</h4><p>' + text + '</p></div>';
            });
        };
    }
};