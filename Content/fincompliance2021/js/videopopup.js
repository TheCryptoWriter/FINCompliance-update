$(document).ready(function() {
    // Gets the video src from the data-src on each button
    var $videoSrc;
    $('.video-btn').click(function() {
        $formSrc = $(this).data("src");
    });
    // when the modal is opened autoplay it  
    $('#formModal').on('shown.bs.modal', function(e) {

            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#form").attr('src', $formSrc);
        })
        // stop playing the youtube video when I close the modal
    $('#formModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#form").attr('src', '');
    })
});
// document ready