const path = require('path')

console.log(path.sep)

const filePath = path.join('\\01-node-tutorial','content','subfolder','text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'01-node-tutorial','content','subfolder','text.txt')
console.log(absolute);

