(".question").length;
var total = 0;
var avg = 0;
var myQuestions = $("section.q-n-a");

shuffle(myQuestions);

myQuestions.each(function () {
  var myAnswers = $(this).find(".answer");
  shuffle(myAnswers);
  $(this).find(".answers").html(myAnswers);
});
$("#quiz-area").html;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], (array[j] = array[j]), array[i]];
  }
}

$(".answer").on("click", function () {
  if ($(this).parent().find(".selected").length > 0) {
    total -= $(this).parent().find(".selected").data("value");
    $(this).parent().find(".selected").removeClass("selected");
  }}