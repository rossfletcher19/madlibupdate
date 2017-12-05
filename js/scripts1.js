$(function() {
  $("#madlib").submit(function(event) {
    debugger;
    var blanks = [$("#firstName").val(), $("#lastName").val(), $("#verb").val(), $("#noun").val(), $("#city").val()];
    for (var index = 0; index < blanks.length; index += 1){
      var word = blanks[index]
    }

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });



    $("#story").show();
    event.preventDefault();
  });
});
