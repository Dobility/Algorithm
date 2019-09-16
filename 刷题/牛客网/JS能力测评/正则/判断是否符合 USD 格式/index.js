function isUSD(str) {
    // 首位不能为0，除非是0.95之类的
    return /^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/.test(str);
}
