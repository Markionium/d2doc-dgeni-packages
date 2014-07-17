var _ = require('lodash');
var processor = require('../../processors/component-groups-generate');
var Config = require('dgeni').Config;

describe("component-groups processor", function() {
  it("should create a new doc for each group of components (by docType) in each module", function() {
    var docs = [];
    var modules = [{
      id: 'mod1',
      components: [
        { docType: 'a', id: 'a1' },
        { docType: 'a', id: 'a2' },
        { docType: 'a', id: 'a3' },
        { docType: 'a', id: 'a4' },
        { docType: 'b', id: 'b1' },
        { docType: 'b', id: 'b2' },
        { docType: 'b', id: 'a3' }
      ]
    }];

    config = new Config();
    config.set('rendering.contentsFolder', 'partials');
    processor.process(docs, config, modules);

    expect(docs.length).toEqual(2);
  });
});