$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#puzzle").val();
    var userArray = userInput.split("");
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y"]
    for (var index = 0; index < userArray.length; index += 1) {
      console.log(userArray[index]);
      alert("Look at" + userArray[index]);
    }
  });
});
