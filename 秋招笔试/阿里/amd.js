let amdwrap =  function (moduleName, commonJSModuleText, requires) {
return `define('${moduleName}',['${requires.join('\',\'')}'], function (require, exports, module) {
${commonJSModuleText}
});`
};

let ret = amdwrap('moduleA','module.exports={name:"Tmall"}',['depA','depB'])
console.log(ret)
