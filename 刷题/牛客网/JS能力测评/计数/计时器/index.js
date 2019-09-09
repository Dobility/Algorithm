function count(start, end) {
    let count = start;
    console.log(count++);
    let t = setInterval(() => {
        if (count <= end) {
            console.log(count++);
        } else {
            clearInterval(t);
        }
    }, 100);
    return {
        cancel: () => clearInterval(t)
    };
}
