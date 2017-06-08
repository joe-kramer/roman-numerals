$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = convert(number);
    $("#result").text(result);
  });
});

var convert = function(number) {
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var array = [];

  for (var i = 0; i < 13; i++) {
    if (number >= digits[i]) {
      array.push(romanNumerals[i]);
      number = number - digits[i];
      i = -1;
    }
  }
  var finalArray = array.join("");
  return finalArray;
}
