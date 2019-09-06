String.prototype.toArray = function(splitType, handler) {
    if (!splitType) splitType = ' '
    if (!handler) handler = a => a
    if (this) {
        return this.split(splitType).map(a => handler(a))
    } else {
        return []
    }
}
String.prototype.toIntArray = function(splitType) {
    return this.toArray(splitType, parseInt)
}
