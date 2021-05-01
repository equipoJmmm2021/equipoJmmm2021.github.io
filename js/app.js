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
            "url": "file:///D:/Multimedia/test/single-song-player/dist/js/loop.mp3",
            "cover_art_url": "file:///D:/Multimedia/background.png"
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