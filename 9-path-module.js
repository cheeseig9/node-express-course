const path = require('path')

console.log(path.sep)

// \content\subfolder\test.txt
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// test.txt
const base = path.basename(filePath)
console.log(base)

// C:\content\subfolder\test.txt
const absolute = path.resolve(__dirname, '/content', 'subfolder', 'test.txt')
console.log(absolute)