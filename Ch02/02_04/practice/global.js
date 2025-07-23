process.stdout.write("Hello \n\n");

const questions = [
  "What's your name?",
  "How old are you?",
  "What do you like?",
];

const answer = [];

function ask(i) {
  process.stdout.write(`\n${questions[i]}`);
  process.stdout.write(" > ");
}

process.stdin.on("data", (data) => {
  process.stdout.write(data.toString().trim());
});

ask(answer.length);
