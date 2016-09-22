// Modal

var htmlContent = "<div id=\"modal-videoplayer\" class=\"modal\"><div  class=\"close\" onclick=\"stop()\">&times;</div><video  tabindex=\"1\" onblur=\"stop()\" class=\"modal-content\" id=\"videoplayer\" controls><source  src=\"\" type=\"\"><source src=\"\" type=\"\">Your browser does not support the video tag.</video></div>";

var modalElement="";
var options="";

// Play video on click
$(document).ready(function() {
  $(".videoplayer").click(function() {
    $(htmlContent).appendTo("body");
    modalElement = document.getElementById('videoplayer');

    options = JSON.parse(this.name);
    $("#videoplayer source").attr({
      "src": options['src'],
      "type": options['type']
    });
    $("#modal-videoplayer").show();
    modalElement.load();
    modalElement.play();
  });
});

function stop() {
  modalElement.pause();
  $("#videoplayer source").attr({
      "src": "",
      "type":""
    });
  $("#modal-videoplayer").fadeOut("1000", function() {
    $("#modal-videoplayer").hide();
    $("#modal-videoplayer").remove();
  });
}

$("#videoplayer").blur(function() {
  console.log(10);
  stop();
});
$(document).keyup(function(e) {
  if(e.keyCode == 27)
    stop();
});
$(window).on("ready resize",function() {
  var InnerWidth = $(document).innerWidth();
  InnerWidth-=20;
  InnerWidth+="px";
$("#videoplayer").css({'width':InnerWidth});
});
