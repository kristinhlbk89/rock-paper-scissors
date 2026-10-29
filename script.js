const form = document.querySelector("#gameform");
const results = document.querySelector("#results");

const onFormSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObj = Object.fromEntries(data.entries());
  console.log(dataObj);
  const userPick = dataObj.userPick;
  rockPaperScissors(userPick);
  form.reset();
};

form.addEventListener("submit", onFormSubmit);

const rockPaperScissors = (userPick) => {
  console.log("User picked:", userPick);

  const computerChoice = computerPick();
  console.log("Computer picked:", computerChoice);
  const result = checkWinner(userPick, computerChoice);
  console.log("Result:", result);
  showResults(userPick, result);
};

const computerPick = () => {
  const choices = ["rock", "paper", "scissors"];

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  return computerChoice;
};

const checkWinner = (userPick, computerChoice) => {
  if (userPick === computerChoice) {
    return "Tie!";
  } else if (
    (userPick === "rock" && computerChoice === "scissors") ||
    (userPick === "paper" && computerChoice === "rock") ||
    (userPick === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
};

const showResults = (userPick, result) => {
  results.textContent = `You picked ${userPick}. ${result}`;
};
