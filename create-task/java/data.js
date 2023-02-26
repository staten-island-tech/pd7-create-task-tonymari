var questions = $(".question").length;
var total = 0;
var average = 0;
var avg = 0;
var myQuestions = $("section.q-n-a");

shuffle(myQuestions);
console.log(myQuestions);

function shuffle(array) {
  for (let i = array.lenght - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], (array[j] = array[j]), array[i]];
  }
}

$(".answer").on("click", function () {
  if ($(this).parent().find(".selected").length > 0) {
    total -= $(this).parent().find(".selected").data("value");
    $(this).parent().find(".selected").removeClass("selected");
  }