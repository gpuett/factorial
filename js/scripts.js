$(function() {
  $("#form").submit(function(event) {

  var input = parseInt($("#input").val());
  for (var index = (input-1); index > 0; index += -1) {
    input *= index
  }
  event.preventDefault();
  $("#output").text(input)
  });
});
