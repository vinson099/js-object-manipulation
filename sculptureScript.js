const sculptureList = require('./data.js'); // import data.js

sculptureListLengths = [];

for(const sculpture in sculptureList){                          // for each sculpture in sculptureList
    const currentSculpture = sculptureList[sculpture];          // create temporary duplicate
    for(const key in sculptureList[sculpture]){                 // for each key in sculpture
        currentSculpture[key] = currentSculpture[key].length;   // override value with length of value
    }
    // add to sculptureListLengths
    sculptureListLengths.push(currentSculpture);
}

// print out the new list
for (const sculpture in sculptureListLengths){
    console.log(sculptureListLengths[sculpture]);
}
