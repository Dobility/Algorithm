function isObject(obj) {
    return obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function);
}

function namespace(oNamespace, sPackage) {
    let keys = sPackage.split('.');
    let root = oNamespace;
    keys.forEach(key => {
        if (!oNamespace.hasOwnProperty(key) || !isObject(oNamespace[key])) {
            oNamespace[key] = {};
        }
        oNamespace = oNamespace[key];
    })
    return root;
}

let oNamespace = {a: {test: 1, b: 2}};
console.log(namespace(oNamespace, 'a.b.c.d'))
