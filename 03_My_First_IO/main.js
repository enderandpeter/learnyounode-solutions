const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);

const bufferString = buffer.toString();

const lineCount = bufferString.split('\n').length - 1;

console.log(lineCount);