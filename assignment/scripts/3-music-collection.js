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
}

console.log(addToCollection('Umbrella', 'Rihanna', 2010));

