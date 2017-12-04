$(function() {
 $("#madLib").submit(function(event) {
var blanks = ["firstName", "lastName", "verb", "noun", "city"];

  //  var firstName = $("input#firstName").val();
  //  var lastName = $("input#lastName").val();
  //  var verb = $("input#verb").val();
  //  var noun = $("input#noun").val();
  //  var city = $("input#city").val();

blanks.forEach(function(blank) {
  var userInput = $("input#" + blank).val();
  $("." + blank).text(userInput);
});
  //  $(".firstName").append(firstName);
  //  $(".lastName").append(lastName);
  //  $(".verb").append(verb);
  //  $(".noun").append(noun);
  //  $(".city").append(city);

   $("#story").show();

   event.preventDefault();
 });
});
