const questions = $(".question").length;
const total = 0;
const avg = 0; //
const myQuestions = $("section.q-n-a");

shuffle(myQuestions);

myQuestions.each(function () {
  const myAnswers = $(this).find(".answer");
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
  }
  $(this).addClass("selected");
  total += $(this).data("value");

  console.log(total);
});

$(".finish").on("click", function () {
  avg = total / questions;
  const message = "";
  if ($("selected").length === questions) {
    if (avg < 1.5) {
      message = "you are thomas";
    } else if (avg < 2.5) {
      ("You are percy");
    } else if (avg < 3.5) {
      ("You are james");
    } else {
      ("You are toby");
    }
  } else {
    message = "oh no go back you missed a question";
  }

  alert(message);
});
