function cssStyle2DomStyle(sName) {
    // 第一步去掉首个中划线-
    // 第二步以 -\w 作为分组， 全局匹配替换
    return sName.replace(/^-/, '').replace(/(-\w)/g, a => {
        return a[1].toUpperCase();
    });
}

console.log(cssStyle2DomStyle('font-size'));
