function isAvailableEmail(sEmail) {
    let reg = /^([\w\.])+\@(([\w])+\.)+([\w]+)+$/
    return reg.test(sEmail)
}

console.log(isAvailableEmail('123@123.c'))
