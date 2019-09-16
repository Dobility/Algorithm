function iterate(obj) {
    let ret = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret.push(`${key}: ${obj[key]}`);
        }
    }
    return ret;
}
