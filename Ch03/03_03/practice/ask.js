const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name?",
  "How old are you?",
  "Where do you live?",
];

function collectAnswers(questions = [], done = (answers = []) => {}) {
  const answers = [];
  const questionAnswered = (answer = "") => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      return rl.question(`${questions[answers.length]} \n`, questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(`${questions[0]} \n`, questionAnswered);
}

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answer!");
  console.log(answers);
  process.exit();
});
