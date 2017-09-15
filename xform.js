var transformer = require('api-spec-transformer');

var ramlToSwagger = new transformer.Converter(transformer.Formats.RAML10, transformer.Formats.SWAGGER);

ramlToSwagger.loadFile('iris.raml', function(err) {
  if (err) {
    console.log(err.stack);
    return;
  }

  ramlToSwagger.convert('yaml')
    .then(function(convertedData) {
      console.log(convertedData);
    })
    .catch(function(err){
      console.log(err);
    });
});