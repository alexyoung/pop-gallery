var fs = require('fs')
  , path = require('path');

module.exports = {
  generator: {
    run: function(helpers, pathName) {
      var paths = ['_posts', '_lib', '_layouts', '_includes', 'stylesheets', 'javascripts'];

      if (!path.existsSync(pathName)) fs.mkdirSync(pathName, 0777);
      paths.forEach(function(p) {
        p = path.join(pathName, p);
        if (!path.existsSync(p)) fs.mkdirSync(p, 0777);
      });

      var files = [
          ['/assets/default.jade', pathName + '/_layouts/']
        , ['/assets/index.jade', pathName]
        , ['/assets/_config.json', pathName]
        , ['/assets/screen.styl', pathName + '/stylesheets/']
        , ['/assets/gallery.js', pathName + '/javascripts/']
      ];

      files.forEach(function(f) {
        var templateFileName = __dirname + f[0]
          , outFileName = f[1] + '/' + path.basename(f[0]);

        if (!path.existsSync(outFileName))
          fs.writeFileSync(outFileName, fs.readFileSync(templateFileName));
      });
    }
  },

  helpers: {
    /**
     * Finds images and generates JSON.
     */
    gallery: function() {
      var files = fs.readdirSync(this.root);
      files = files.filter(function(f) { return f.match(/\.(png|gif|jpe?g)/i); });
      return '<div id="gallery"></div><script type="text/javascript">$(\'#gallery\').gallery(' + JSON.stringify(files) + ')</script>';
    }
  }
};
