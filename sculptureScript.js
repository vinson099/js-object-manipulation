const sculptureList = require('./data.js'); // import data.js

sculptureListLengths = [];

for(const sculpture in sculptureList){
    const currentSculpture = sculptureList[sculpture];
    for(const key in sculptureList[sculpture]){
        currentSculpture[key] = currentSculpture[key].length;
    }
    sculptureListLengths.push(currentSculpture);
}

for (const sculpture in sculptureListLengths){
    console.log(sculptureListLengths[sculpture]);
}
