const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");

const score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
const answer = num1 * num2;

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;


formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;

  if (userAns === answer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
