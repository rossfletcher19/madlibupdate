$(function() {
 $("#madLib").submit(function(event) {
   var blanks = ["firstName", "lastName", "verb", "noun", "city"];
   for (var index = 0; index < blanks.length; index += 1){
     var word = blanks[index]
     var userInput = $("input#" + word).val();
     $("." + word).text(userInput);   //targeting class labeled "firstname"
   }

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });


   $("#story").show();
   event.preventDefault();
 });
});
