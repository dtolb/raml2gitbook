const raml2obj = require('raml2obj');
const {promisify} = require('util');
const fs = require('fs');
const mkdir = promisify(fs.mkdir);
const fsStat = promisify(fs.stat);
const rmdir = promisify(require('rmdir'));

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

const createFolder = async (path) => {
    try {
        const stats = await fsStat(path);
        debug(`Removing directory: ${path} `);
        await rmdir(path);
    }
    catch (err) {
        debug(`Directory: ${path} doesn't exist`);
    }
    try {
        debug(`Creating: ${path}`);
        await mkdir(path);
    }
    catch (err) {
        debug(`Error creating folder ${path}`);
        debug(err);
        throw err;
    }
};

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
            const data = {
                method: method.method,
                name: root
            };
            methods.push(data);
        }
    }
    if (resource.resources && resource.resources.length > 0) {
        for (let newResource of resource.resources) {
            const nextRoot = `${root}${newResource.relativeUri}`;
            methods = methods.concat(getMethods(newResource, nextRoot))
        }
    }
    return methods;
};

const createSummary = async (resources) => {
    let summary = `# Summary
## Overview\n`;
    //
    let p = [];
    for (let resource of resources) {
        const headerName = resource.uniqueId;
        const uri = resource.relativeUri;
        const entry = `## ${headerName}\n`;
        const location = `methods/${headerName}`;
        summary = summary + entry;
        let allMethods = getMethods(resource, uri);
        for (let method of allMethods) {
            method.fileName = (method.method.toLocaleLowerCase() + method.name).replace(/\/|\{|\}/g, '');
            method.fileLocation = `${location}/${method.fileName}.md`;
            const summaryName = `* [${method.method.toUpperCase()} ${method.name}](${method.fileLocation})\n`;
            summary = summary + summaryName;
        }
    }
    //debug(allMethods);
    console.log(summary);
    return await Promise.all(p);
};


const main = async () => {
    await createFolder('./gitbook');
    await createFolder('./gitbook/methods');
    const ramlObj = await raml2obj.parse('./messaging-2.raml');
    createSummary(ramlObj.resources);
    // for (let resource of ramlObj.resources) {
    //  debug(resource);
    // }
};

main();