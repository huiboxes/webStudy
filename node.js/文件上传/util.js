exports.bufferSplit = function (buffer, delimiter) {
    let arr = []
    let n = 0

    while (n = buffer.indexOf(delimiter) != 1) {
        arr.push(buffer.slice(0, n))
        buffer = buffer.slice(n + delimiter.length)
    }
    arr.push(buffer)
}