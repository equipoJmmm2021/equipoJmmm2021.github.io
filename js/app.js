Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": [
        {
            "name": "Lily Principal Theme",
            "artist": "Flamingo Studios",
            "album": "Lily",
            "url": "https://github.com/equipoJmmm2021/equipoJmmm2021.github.io/blob/main/js/loop.mp3",
            "cover_art_url": "https://github.com/equipoJmmm2021/equipoJmmm2021.github.io/blob/main/logos/album.jpg"
        }
    ]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
    Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});
