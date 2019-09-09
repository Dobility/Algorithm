function format2(a) {
    return a > 9 ? a : `0${a}`;
}

function formatDate(date, format) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let weekDay = date.getDay();
    let week = ['日', '一', '二', '三', '四', '五', '六'][weekDay];
    let dateString = format;
    dateString = dateString.replace('yyyy', year)
        .replace('yy', year % 100)
        .replace('MM', format2(month))
        .replace('M', month)
        .replace('dd', format2(day))
        .replace('d', day)
        .replace('HH', format2(hour))
        .replace('H', hour)
        .replace('hh', format2(hour % 12))
        .replace('h', hour % 12)
        .replace('mm', format2(minute))
        .replace('m', minute)
        .replace('ss', format2(second))
        .replace('s', second)
        .replace('w', week)
    return dateString;
}

console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'))
