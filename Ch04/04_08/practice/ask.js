const fs = require("fs");

let questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

let answers = [];
let answer = "";
let answerStream;

function ask(i) {
  process.stdout.write(`\n\n\n\n  ${questions[i]}`);
  process.stdout.write(`  >  `);
}

process.stdin.once("data", (data) => {
  let name = data.toString().trim();
  let fileName = `./${name}.md`;
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }
  answerStream = fs.createWriteStream(fileName, "utf-8");
  answerStream.write(
    `Question Answers for ${name} \n=======================\n`
  );
});

process.stdin.on("data", function (data) {
  answer = data.toString().trim();

  answerStream.write(`Question: ${questions[answers.length]} \n`);
  answerStream.write(`Answer: ${answer} \n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });

  answers.push(answer);
});

process.on("exit", function () {
  answerStream.close();
  process.stdout.write("\n\n\n\n  ");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`
  );
  process.stdout.write("\n\n\n\n");
});

ask(answers.length);
