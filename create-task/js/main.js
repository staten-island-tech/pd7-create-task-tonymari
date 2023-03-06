const train = [
  {
    Name: "A steam engine is a heat engine that performs mechanical work using steam as its working fluid. The steam engine uses the force produced by steam pressure to push a piston back and forth inside a cylinder. This pushing force can be transformed, by a connecting rod and crank, into rotational force for work.",
    Dec: "Good character includes traits like loyalty, honesty, courage, integrity, fortitude, and other important virtues that promote good behavior. A person with good character chooses to do the right thing because he or she believes it is the morally right to do so.",
  },
];
const boo = [
  {
    Name: "A diesel mechanical locomotive uses a mechanical transmission in a fashion similar to that employed in most road vehicles. This type of transmission is generally limited to low-powered, low speed shunting (switching) locomotives, lightweight multiple units and self-propelled railcars.",
    Dec: "Harsh - very critical, negative to people. Irresponsible - not responsible; not having or showing maturity or good judgment. Patronising - being nice to people but thinking you are better than them. Pessimistic - always expecting bad things to happen; negative about the future.",
  },
];

var steamScore = 0;
var desielScore = 0;
var questionCount = 0;
var result = document.getElementById("result");
var restart = document.getElementById("restart");
var displayResult = document.getElementById("displayResult");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

q1a1.addEventListener("click", steam);
q1a2.addEventListener("click", desiel);

q2a1.addEventListener("click", desiel);
q2a2.addEventListener("click", steam);

q3a1.addEventListener("click", steam);
q3a2.addEventListener("click", desiel);

q4a1.addEventListener("click", desiel);
q4a2.addEventListener("click", steam);

q5a1.addEventListener("click", steam);
q5a2.addEventListener("click", desiel);

restart.addEventListener("click", restartQuiz);
function steam() {
  steamScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "steamScore =" + steamScore);

  if (questionCount == 5) {
    console.log("Score done");
    updateResult();
  }
}
function desiel() {
  desielScore += 1;
  questionCount += 1;

  console.log(
    "questionCount = " + questionCount + "desielScore =" + desielScore
  );

  if (questionCount == 5) {
    console.log("Score done");
    updateResult();
  }
}
function updateResult() {
  //click button to update result
  displayResult.addEventListener("click", display);
}
function display() {
  if (steamScore >= 3) {
    (result.innerHTML =
      "You are a Steamy! A steam engine is a heat engine that performs mechanical work using steam as its working fluid. The steam engine uses the force produced by steam pressure to push a piston back and forth inside a cylinder. This pushing force can be transformed, by a connecting rod and crank, into rotational force for work., they are typically Good character includes traits like loyalty, honesty, courage, integrity, fortitude, and other important virtues that promote good behavior. A person with good character chooses to do the right thing because he or she believes it is the morally right to do so."),
      console.log(train);
  } else if (desielScore >= 3) {
    result.innerHTML =
      "You are an Desiel! A diesel mechanical locomotive uses a mechanical transmission in a fashion similar to that employed in most road vehicles. This type of transmission is generally limited to low-powered, low speed shunting (switching) locomotives, lightweight multiple units and self-propelled railcars. They are typically Harsh - very critical, negative to people. Irresponsible - not responsible; not having or showing maturity or good judgment. Patronising - being nice to people but thinking you are better than them. Pessimistic - always expecting bad things to happen; negative about the future.";
    console.log("You are an Desiel"), console.log(boo);
  }
}
function restartQuiz() {
  steamScore = 0;
  desielScore = 0;
  questionCount = 0;
  result.innerHTML = "You are ...";

  console.log("desielScore = 0");
  console.log("steamScore = 0");
  console.log("questionCount = 0");
}
