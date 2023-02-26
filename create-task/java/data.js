var questions = $(".question").length;
var total = 0;
var average = 0;

$(".answer").on("click", function () {
  if ($(this).parent().find(".selected").length > 0) {
    total -= $(this).parent().find(".selected").data("value");
    $(this).parent().find(".selected").removeClass("selected");
  }
  $(this).addClass("selected");
  total += $(this).data("value");

  console.log(total);
});

$(".finish").on("click", function () {
  avg = total / questions;
  var message = "";
  if (avg < 1.5) {
    message = "you are thomas";
  } else if (avg < 2.5) {
    ("You are percy");
  } else if (avg < 3.5) {
    ("You are james");
  } else {
    ("You are toby");
  }
});
