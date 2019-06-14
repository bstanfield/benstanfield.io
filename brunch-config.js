// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^(?!app\/assets\/js)/
    }
  },
  stylesheets: {
    joinTo: 'app.css',
    order: {
      after: ['app/styles/styles.scss', 'app/styles/normalize.css', 'app/styles/projects.scss', 'app/styles/special-projects.scss', 'app/styles/markdown.css', 'app/styles/solarized-dark.css']
    }
  }
};

exports.plugins = {
  babel: {presets: ['latest']}
};
