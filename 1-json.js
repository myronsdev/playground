const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data);

data.name = 'Myron';
data.age = 33;

console.log(data);

const newJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', newJSON);
