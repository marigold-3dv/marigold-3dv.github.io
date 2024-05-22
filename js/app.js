// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly: true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];

    resizeAndPlay($('#sparsity')[0]);
});

function selectCompVideo(element, areaId) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    // if (activeMethodPill) {
    //     activeMethodPill.classList.remove("active");
    // }
    // activeMethodPill = methodPill;
    // methodPill.classList.add("active");
    // method = methodPill.getAttribute("data-value");
    // var src = "videos/h264_" + method + ".mp4";
    // console.log(src);

    // var video_active = document.getElementById("compVideo0");
    // video_active.src = src;
    // video_active.load();
    var video = document.getElementById(`compVideo${areaId.charAt(0).toUpperCase() + areaId.slice(1)}`);
    var source = document.getElementById(`source${areaId.charAt(0).toUpperCase() + areaId.slice(1)}`);
    // Update the video source
    var videoSrc = 'videos/h264_' + element.getAttribute('data-value') + '.mp4';
    source.src = videoSrc;
    video.load();
    video.play();

    // Update the active state of the pills
    var pills = document.querySelectorAll(`#${areaId} .method-pill`);
    pills.forEach(pill => pill.classList.remove('active'));
    element.classList.add('active');

}
