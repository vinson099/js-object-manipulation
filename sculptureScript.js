const sculptureList = require('./data.js'); // import data.js

sculptureListLengths = [];

for(const sculpture in sculptureList){
    // assigns the lengths of each key in a new, empty object
    // pushes the new object to sculptureListLengths
    sculptureListLengths.push(Object.assign({}, 
        {
            name: sculptureList[sculpture].name.length,
            artist: sculptureList[sculpture].artist.length,
            description: sculptureList[sculpture].description.length,
            url: sculptureList[sculpture].url.length,
            alt: sculptureList[sculpture].alt.length   
        }
    ));
}

for (const sculpture in sculptureListLengths){
    console.log(sculptureListLengths[sculpture]);
}
