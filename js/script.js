/* global $ */


let songs = [
    "I Should Live in Salt", 
    "True Love Waits",
    "Shallow",
    "Die A Happy Man"
    ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

let images_links=[
    "https://images.genius.com/b904ca605fa6dd5d417cb1d569d4cbbd.1000x1000x1.jpg", 
    "https://img.discogs.com/1Fz2fj-D-QMQD39IQP727i2mbNI=/discogs-uploads/u4303-radiohead-moonshaped.jpg.jpg", 
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/A_Star_Is_Born_%282018_soundtrack%29.png/220px-A_Star_Is_Born_%282018_soundtrack%29.png", 
    "http://cdn.shopify.com/s/files/1/0812/1837/products/Tangled_a8266244-389d-42cb-8800-c8e8477bcf5c_grande.jpg?v=1449610456"
    ];

let artists=[
    "The National", 
    "Radiohead", 
    "Lady Gaga, Bradley Cooper",
    "Thomas Rhett"
    ];

let songlengths=[
    "4:08",
    "3:35",
    "4:43",
    "3:47"
    ];
let links=[
    "https://open.spotify.com/search/results/i%20should%20live%20in%20salt",
    "https://open.spotify.com/search/results/true%20love%20waits",
    "https://open.spotify.com/search/results/shallow",
    "https://open.spotify.com/album/4ykbJPI8MPscFzROE8dqLy"
    ];



function displaySongInfo(){
 
songs.forEach(function(songtitle){
    $("#songs").append("<p>"+songtitle+"</p>");
}); 


}

images_links.forEach(function(imagelink) {
$("#images").append("<img src=" + "'" + imagelink + "'" + ">");
});

artists.forEach(function(artist) {
$("#artists").append("<p>" + artist + "</p>");
});

songlengths.forEach(function(songlength) {
$("#lengths").append("<p>" + songlength + "</p>");
});

links.forEach(function(songlink) {
$("#links").append("<a href=" + "'" + songlink + "'" + ">" + "<p> Listen!</p>" + "</a>");
});



function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

function addSongInfo(){
    let songInput = $("#song").val();
     songs.push(songInput);
     
    let imageInput = $("#image").val();
     images_links.push(imageInput);
     
    let artistInput = $("#artist").val();
     artists.push(artistInput);
    
    let lengthInput = $("#length").val();
     songlengths.push(lengthInput);
     
    let linkInput = $("#link").val();
     links.push(linkInput)

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
