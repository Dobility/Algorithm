function rgb2hex(sRGB) {
    try {
        // 切出数字
        let arr = sRGB.split('(')[1]
            .split(')')[0]
            .split(',');
        if (arr.length !== 3) {
            return sRGB;
        }
        // 转16进制
        let sHex = '#';
        for (let i = 0 ; i < arr.length; i++) {
            let num = parseInt(arr[i]);
            if (num > 255 || num < 0 || isNaN(num)) {
                return sRGB;
            }
            let h = num.toString(16);
            sHex += h.length > 1 ? h : '0' + h;
        }
        return sHex;
    } catch (e) {
        return sRGB;
    }
}

// rgb2hex('rgb(0, 255, 255)')
console.log(rgb2hex('rgb(0, 255, 5)'))
console.log(rgb2hex('rgb(0, 255, 277)'))
console.log(rgb2hex('rgb(0, 255, abc)'))
