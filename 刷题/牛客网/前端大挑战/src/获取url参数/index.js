function getUrlParam(sUrl, sKey) {
    const queryStartIndex = sUrl.indexOf('?') + 1;
    const hashStartIndex = sUrl.indexOf('#') + 1;
    // 没有 query 和 sKey
    if (!queryStartIndex && !sKey) {
        return {};
    }
    // 没有 query 但有 sKey
    if (!queryStartIndex && sKey) {
        return '';
    }
    // 切割出 query
    let queryString = '';
    if (queryStartIndex > hashStartIndex) {
        queryString = sUrl.substr(queryStartIndex, sUrl.length);
    } else {
        queryString = sUrl.substring(queryStartIndex, hashStartIndex - 1);
    }
    // 转成键值对
    let queryObj = {};
    queryString.split('&').forEach(params => {
        if (params) {
            let [key, value] = params.split('=');
            if (queryObj.hasOwnProperty(key) || !value) {
                let q = queryObj[key];
                q instanceof Array ? q.push(value) : queryObj[key] = [q, value];
            } else {
                queryObj[key] = value;
            }
        }
    });
    // 返回
    if (sKey) {
        return queryObj[sKey] || '';
    } else {
        return queryObj;
    }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key'))
// console.log(getUrlParam('http://www.nowcoder.com?test'))
// console.log(getUrlParam('http://www.nowcoder.com?test=123&test=234'))
