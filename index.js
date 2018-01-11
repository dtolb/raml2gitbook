const raml2obj = require('raml2obj');
const {promisify} = require('util');
const fs = require('fs-extra')
const rmdir = promisify(require('rmdir'));
const nunjucks    = require( 'nunjucks' ) ;
nunjucks.configure({ autoescape: false });
const format = require('xml-formatter');
const options = {indentation: '  ', stripComments: false};
const NunjucksInspect = require('nunjucks-inspect');

const name = 'Raml2Gitbook';
const debug = require('debug')(name);


const getScope = (resource) => {
    try {
        if (resource.annotations[0].key.trim().toLocaleLowerCase() === 'scope') {
            return resource.annotations[0].structuredValue;
        }
        else {
            return false;
        }
    }
    catch (err) {
        debug('No scope annotation');
        return false;
    }
}

const forceCreateFolder = async (path) => {
    try {
        await fs.ensureDir(path)
        await fs.emptyDir(path)
    }
    catch (err) {
        debug(`Directory: ${path} doesn't exist`);
    }
};

const copyFiles = async (source, dest) => {
    try {
        fs.copy(source, dest)
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

const getTemplate = async path => {
    try {
        const templateFile = await fs.readFile(path, "utf8");
        const env = new nunjucks.Environment(null, { autoescape: false });
        env.addExtension('inspect', new NunjucksInspect());
        const template = nunjucks.compile(templateFile, env);
        //template.new_cls.env.new_cls.opts.autoescape=false;
        //console.log(template)
        return template;
    }
    catch (e){
        console.log(e);
        console.log(`Error opening template file ${path}`)
        process.exit(e);
    }
}

const createMainPage = (baseResource) => {

};

// const getMethods = (resources, root) => {
//     let methods = [];
//     for (let resource of resources) {
//         const nextRoot = `${root}${resource.relativeUri}`;
//         if (resource.methods) {
//             for (let method of resource.methods){
//                 const data = {
//                     method: method.method,
//                     name: nextRoot
//                 };
//                 methods.push(data);
//             }
//         }
//         if (resource.resources && resource.resources.length > 0) {
//             methods = methods.concat(getMethods(resource.resources, nextRoot))
//         }
//     }
//     return methods;
// };


const getMethods = (resource, root) => {
    let methods = [];
    if (resource.methods) {
        for (let method of resource.methods){
            let queryParameters = [];
            let allUriParameters = [];
            let responses = false;
            let body = null;
            var resExamples = [];
            var reqExamples = [];
            try {
                //displayName = method.allUriParameters[0].displayName
                queryParameters = method.queryParameters;
                allUriParameters = method.allUriParameters;
                responses = method.responses;
                body = method.body;
                try {
                    // super sloppy codde to handle differences between post and get
                    method.body.forEach(request => {
                        request.examples.forEach(example => {
                            example.formatted = format(example.value.replace(/[\n\r]/g, '')).replace(/\n\s*\n/g, '\n');;
                            reqExamples.push(example);
                        });
                    });
                }
                catch (e){

                }
                try {
                    method.responses.forEach(response => {
                        response.body.forEach(x => {
                            x.examples.forEach(example => {
                                example.code = response.code;
                                example.formatted = format(example.value.replace(/[\n\r]/g, '')).replace(/\n\s*\n/g, '\n');;
                                if (!response.description) {
                                    example.description = "";
                                }
                                else {
                                    example.description = response.description;
                                }
                                resExamples.push(example);
                            });
                        });
                    });
                }
                catch (e) {

                }
                // console.log(reqExamples);
                // console.log(resExamples);
            }
            catch (e){
                //console.log(e);
            }

            const data = {
                method: method.method,
                name: root,
                description: method.description,
                displayName,
                queryParameters,
                allUriParameters,
                responses,
                body,
                reqExamples,
                resExamples,
            };
            // if (method.responses){
            //     data.responses = method.responses;
            // }
            // else {
            //     data.responses = false;
            // }
            // if (method.body) {
            //     data.body = method.body;
            // }
            //console.log(JSON.stringify(data, null, 2));
            methods.push(data);
        }
    }
    if (resource.resources && resource.resources.length > 0) {
        for (let newResource of resource.resources) {
            const nextRoot = `${root}${newResource.relativeUri}`;
            methods = methods.concat(getMethods(newResource, nextRoot))
        }
    }
    //console.log(methods.length);
    return methods;
};


// const buildPages = async method => {
//     let example = ""
//     try {
//         if (method.responses[0].body[0].examples[0].structuredValue) {
//             example = method.responses[0].body[0].examples[0].structuredValue;
//         }
//         let page = `## Place holder`

//         page = `{% method %}
// ## ${method.name}

// ${method.description}

// {% common %}

// {% sample lang="xml" %}

// \`\`\`xml
// ${example}

// \`\`\`

// {% endmethod %}
//     `

//         fs.writeFile(`./gitbook/${method.fileLocation}`, page)
//     }
//     catch (e) {
//         console.log(method.name);
//         console.log('Error Building Page!')
//         console.log(e);
//         fs.writeFile(`./gitbook/${method.fileLocation}`, method.name)
//     }

// }



const buildPages = async (template, method) => {
    try {
        const page = template.render(method);
        //console.log(page)
        fs.writeFile(`./gitbook/${method.fileLocation}`, page)
    }
    catch (e) {
        console.log(method.name);
        fs.writeFile(`./error-${method.fileName}.json`, JSON.stringify(method));
        console.log('Error Building Page!')
        console.log(e);
        //fs.writeFile(`./gitbook/${method.fileLocation}`, method.name)
    }

}

const displayName = path => {
    const elms = path.split('/');
    if (elms[0] === '')  {
        elms.shift();
    }
    if (elms.length < 2 || elms[0] !== 'accounts') {
        return path;
    }
    return `${elms[elms.length - 2]}/${elms[elms.length - 1]}`
}

const createSummary = async (resources, template) => {
    let summary = `# Summary
## Overview

* [Getting Started](README.md)\n`;
    //
    let p = [];
    for (let resource of resources) {
        const headerName = resource.uniqueId;
        const uri = resource.relativeUri;
        const entry = `\n## ${headerName}\n`;
        const location = `methods/${headerName}`;
        try {
            await fs.ensureDir(`./gitbook/${location}`);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        summary = summary + entry;
        let allMethods = getMethods(resource, uri);
        console.log(allMethods.length)
        for (let method of allMethods) {
            method.fileName = (method.method.toLocaleLowerCase() + method.name).replace(/\/|\{|\}/g, '');
            method.fileFolder = location;
            method.fileLocation = `${location}/${method.fileName}.md`;
            //console.log(JSON.stringify(method, null, 2));
            buildPages(template, method);
            method.prettyName = displayName(method.name);
            //console.log(method.prettyName);
            const summaryName = `* [${method.method.toUpperCase()} ${method.prettyName}](${method.fileLocation})\n`;
            summary = summary + summaryName;
        }
    }
    //debug(allMethods);
    //console.log(summary);
    try {
        await fs.writeFile('./gitbook/SUMMARY.md', summary);
        await fs.writeFile('./gitbook/README.md', '## Hello');
    }
    catch (e) {
        console.log(e);
    }
    return await Promise.all(p);
};


const main = async () => {
    //await forceCreateFolder('./gitbook');
    await forceCreateFolder('./gitbook/methods');
    await copyFiles('./gitbook_boiler', './gitbook');
    const ramlObj = await raml2obj.parse('./iris.min.raml');
    var str = JSON.stringify(ramlObj, null, 2); // spacing level = 2
    const template = await getTemplate('./page.njk');
    //console.log(str);
    createSummary(ramlObj.resources, template);
    // for (let resource of ramlObj.resources) {
    // 	debug(resource);
    // }
};

main();