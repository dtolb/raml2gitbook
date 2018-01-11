const myTest = {
    hello: {
        world: {
            countries: {
                america: {
                    states: [
                        "NC",
                        "SC"
                    ]
                },
                canada: {
                    p: [
                        "abc",
                        "123"
                    ]
                }
            }
        }
    }
};

//console.log(myTest);
//console.log(myTest.hello.world);
xml2js = require('xml2js');
const {promisify} = require('util');
const parseAsync = promisify(xml2js.parseString);
const libxmljs = require("libxmljs");
var format = require('xml-formatter');

const main = async () => {
    const x = `<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?> <Application> <AppName>XgRIdP</AppName> </Application>`

    const y = await parseAsync(x);
    console.log(y);
    var xmlDoc = libxmljs.parseXmlString(x);
    console.log(xmlDoc.toString());

    var options = {indentation: '  ', stripComments: false};
    var formattedXml = format(x, options);
    console.log(formattedXml);

}

main();


