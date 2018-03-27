$(function() {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y"]
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#form").hide();
    var userInput = $("#puzzle").val();
    var userArray = userInput.split("");
    for (var i = 0; i < userArray.length; i++) {
      for (var j = 0; j < vowels.length; j++) {
       if (userArray[i] === vowels[j]) {
         userArray[i] = "-";
        }
      }
     }
     var output = userArray.join("");
     $("#output").text(output);
  });
});
