console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    } 
    collection.push(album);
    return album
};

console.log(addToCollection('Umbrella', 'Rihanna', 2010));
console.log(addToCollection('Razors Edge', 'ACDC', 1990));
console.log(addToCollection('Country Squire', 'Tyler Childers', 2019));
console.log(addToCollection('Doom Soundtrack', 'Mick Gordon', 2016));
console.log(addToCollection('The Battle of Los Angeles', 'RATM', 1999));
console.log(addToCollection('Led Zeppelin IV', 'Led Zeppelin', 1971));

console.log(collection);



function showCollection (collection) {
    console.log(collection.length);
    for (i=0; i < collection.length; i++) {
        console.log(collection[i].title + ' by ' + collection[i].artist + ' published in year ' + collection[i].yearPublished);
    }
}

showCollection(collection);





function findByArtist (artist) {
    let findArtist = [];
    for (i=0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            findArtist.push(collection[i]);
        } 
    } 
    console.log(findArtist);
}

findByArtist('Rihanna');

findByArtist('Jim');
