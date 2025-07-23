process.stdout.write("Hello \n\n");

const questions = [
  "What's your name?",
  "How old are you?",
  "What do you like?",
];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n${questions[i]}`);
  process.stdout.write(" > ");
}

ask();

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  process.stdout.write("\nThis's your basic info:\n");
  process.stdout.write(` Your name: ${answers[0]}\n`);
  process.stdout.write(` Your age: ${answers[1]}\n`);
  process.stdout.write(` Your hobby: ${answers[2]}\n`);
});
