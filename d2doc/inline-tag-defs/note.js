var INLINE_NOTE = /(\w+) (.+?)\n((.\n?)+)/;

module.exports = {
    name: 'note',
    description: 'Process inline note tags (of the form {@link some/uri Some Title}), replacing them with HTML anchors',
    handlerFactory: function(partialNames) {

        return function handleLinkTags(doc, tagName, tagDescription) {

            // Parse out the uri and title
            return tagDescription.replace(INLINE_NOTE, function(match, level, title, text) {

                return '<div class="bs-callout bs-callout-' + level + '"><h4>' + title + '</h4><p>' + text + '</p></div>';
            });
        };
    }
};