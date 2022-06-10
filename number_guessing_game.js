let quit = true;
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const username = prompt(`Please enter your name: `);

const numberGuessingGame = (range = 2, point = 0, stage = 1) => {
  const guessedNum = Number(prompt(`Guess a number between 1 and ${range}: `));
  console.log(guessedNum);

  const rangeNumber = getRndInteger(1, range);
  if (guessedNum === rangeNumber) {
    point++;
    range++;
    stage++;
    numberGuessingGame(range, point);
    console.log(
      `Weldone ${username}, You are unto the next stage ${stage}. Your point(s) is ${point}`
    );
  } else {
    console.log(`Game over`);
    console.log(
      `Sorry ${username}, The correct number is ${guessedNum}. Your total point(s) is ${point}`
    );
  }
};

const startGame = () => {
  while (quit) {
    const startInstruction = Number(prompt(`Ready to play?\n1. Yes 2. Exit`));
    if (startInstruction === 1) {
      numberGuessingGame();
    } else if (startInstruction === 2) {
      quit = false;
    } else {
      console.log(`Enter a valid number.`);
    }
  }
};

startGame();