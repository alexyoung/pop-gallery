var assert = require('assert')
  , gallery = require(__dirname + '/../lib/index')
  , result = gallery.helpers.gallery.apply({ root: __dirname + '/fixtures/' });

// Make sure it actually finds the files
assert.ok(result.match('div id="gallery"'));
assert.ok(result.match('bear_pepsi\.png'));
