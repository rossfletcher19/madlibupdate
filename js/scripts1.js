$(function() {
  $("#madlib").submit(function(event) {
    // debugger;
    var blanks = ["firstName", "lastName", "verb", "noun", "city"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();
    event.preventDefault();
  });
});
