console.log('***** Music Collection *****')

let collection = [];

/** 
function addToCollection (title, artist, yearPublished) {
    collection.title = title;
    collection.artist = artist;
    collection.yearPublished = yearPublished;
} 
*/


let albumOne = {
    title: 'Immutable',
    artist: 'Meshuggah',
    yearPublished: 2022,
};

let albumTwo = {
    title: 'RazorsEdge', 
    artist: 'ACDC',
    yearPublished: 1990, 
};




function addToCollection (albumOne) {
    collection.push(albumOne);
};


console.log(addToCollection);
console.log(collection);