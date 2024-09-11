$(function () {
    var player = videojs('my-video');
    var playBtn = $('.play-btn');
    var pauseBtn = $('.pause-btn');
    var isPlaying = false;

    function togglePlayPause() {
        if (isPlaying) {
            player.pause();
            playBtn.removeClass('hidden');
            pauseBtn.addClass('hidden');
        } else {
            player.play();
            playBtn.addClass('hidden');
            pauseBtn.removeClass('hidden');
        }
        isPlaying = !isPlaying;
    }

    playBtn.click(togglePlayPause);
    pauseBtn.click(togglePlayPause);

    $('.section_highlights-wrapper--content_top-video').hover(
        function () {
            if (isPlaying) {
                playBtn.addClass('hidden');
                pauseBtn.removeClass('hidden');
            } else {
                playBtn.removeClass('hidden');
                pauseBtn.addClass('hidden');
            }
        },
        function () {
            if (isPlaying) {
                pauseBtn.addClass('hidden');
            } else {
                playBtn.addClass('hidden');
            }
        }
    );

    playBtn.removeClass('hidden');

    player.on('ended', function () {
        pauseBtn.addClass('hidden');
        playBtn.removeClass('hidden');
        isPlaying = false;
    });
});
