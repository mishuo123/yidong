var hei_ = document.getElementsByClassName('hei')[0];
var video_ = document.getElementById('vid');
var bg_ = document.getElementsByClassName('bg')[0];
touch.on(hei_, 'tap', function () {
    video_.style.display = 'block';
});

//视频
var timeDisplay;
video_.addEventListener('timeupdate', function () {
    timeDisplay = Math.ceil(video_.currentTime);
    if (timeDisplay == 5) {
        bg_.style.display = 'none';
    }
});