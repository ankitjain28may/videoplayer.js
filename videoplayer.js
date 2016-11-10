// videoplayer.js
// Made By - Ankit Jain
// Date - 10/10/2016

var htmlContent = "<div id=\"modal-videoplayer\" class=\"modal\"><div  class=\"close\" onclick=\"stop()\">&times;</div><video  tabindex=\"1\" onblur=\"stop()\" class=\"modal-content\" id=\"videoplayer\" controls><source  src=\"\" type=\"\"><source src=\"\" type=\"\">Your browser does not support the video tag.</video></div>";

var videoPlayer="";
var options="";

// jQuery Function videoplayer
(function( $ ){
  $.fn.videoplayer = function(options) {
    options = JSON.parse(options);
    this.src = options.src;
    this.type = options.type;
    this.videoElement = $(this.selector);
    $(htmlContent).appendTo("body");
    videoPlayer = document.getElementById("videoplayer");
    $("#videoplayer source").attr({
      "src": this.src,
      "type": this.type
    });
    $("#modal-videoplayer").show();
    videoPlayer.load();
    videoPlayer.play();
  };
})( jQuery );

// Stop function
function stop() {
  videoPlayer.pause();
  $("#videoplayer source").attr({
      "src": "",
      "type":""
    });
  $("#modal-videoplayer").fadeOut("1000", function() {
    $("#modal-videoplayer").hide();
    $("#modal-videoplayer").remove();
  });
}

// On blur, Stop the video
$("#videoplayer").blur(function() {
  stop();
});

// On pressing ESC, stop the video
$(window).on("keyup resize",function(e) {
  if(e.keyCode == 27)
    stop();
});

//Using HTML
$(".videoplayer").click(function() {
  options = $(this).data("video");
  options = JSON.stringify(options);
  $(this).videoplayer(options);
})


// Vanilla Js Scroller function

function Videoplayer(options) {
    var element = JSON.parse(options)["element"];
    $(element).videoplayer(options);
}