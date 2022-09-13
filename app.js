const num1 = Math.round(Math.random() * 10);
const num2 = Math.round(Math.random() * 10);

const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}



questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

let answer = num1 * num2;

formEl.addEventListener("submit", () => {
  let userAns = Number(inputEl.value);

  if (userAns === answer) {
    score++;
    scoreEl.innerText = `Score:${score}`;
    updateLocalStorage();
  } else {
    score--;
    scoreEl.innerText = `Score:${score}`;
    updateLocalStorage();
  }
});


function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

// btnEl.addEventListener("click",()=>{
//     questionEl.innerText=`What is ${num1} multiply by ${num2} ?`
// })
