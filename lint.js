const raml2html = require('raml2html');
const fs = require('fs');
const configWithDefaultTheme = raml2html.getConfigForTheme();
const IRIS_RAML = './iris.min.raml';
const HTML_LOCATION = 'iris.html';

// source can either be a filename, url, or parsed RAML object
raml2html.render(IRIS_RAML, configWithDefaultTheme).then(function(result) {
  fs.writeFileSync(HTML_LOCATION, result);
}, function(error) {
  console.log(error);
});