function captureThreeNumbers(str) {
    try {
        return str.match(/\d{3}/)[0];
    } catch (e) {
        return false;
    }
}
