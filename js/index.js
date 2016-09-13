var options = "";
var v = document.getElementById('hello');
$(document).ready(function() {
  $(".clickme").click(function() {
    if (options != "")
      v.pause();
    options = JSON.parse(this.name);
    $("#hello source").attr({
      "src": options['src'],
      "type": options['type']
    });
    $("#myModal").modal(2000);
    v.load();
    v.play();
  });
});

function stop() {
  v.pause();
  $("#hello source").attr({
      "src": "",
      "type":""
    });
}
