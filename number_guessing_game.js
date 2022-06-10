let start = true;
let startMessage = "Start Game";
const username = prompt(`Please enter your name: `);
let welcomeUser = `Welcome ${username}\n`;

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numberGuessingGame = (range = 2, point = 0, stage = 1, play = true) => {
  while (play) {
    const guessedNum = Number(
      prompt(`Guess a number between 1 and ${range}: `)
    );
    const rangeNumber = getRndInteger(1, range);

    if (guessedNum === rangeNumber) {
      point++;
      range++;
      stage++;
      console.log(
        `Weldone ${username}, You are unto the next stage ${stage}. Your point(s) is ${point}`
      );
    } else {
      welcomeUser = "";
      startMessage = "Do you want to continue";
      play = false;
      console.log(
        `Game over!!!\nSorry ${username}, The correct number is ${rangeNumber}. Your total point(s) is ${point}`
      );
    }
  }
};

const startGame = () => {
  while (start) {
    const startInstruction = Number(
      prompt(`${welcomeUser}${startMessage}\n1. Yes\n2. No`)
    );
    if (startInstruction === 1) {
      numberGuessingGame();
    } else if (startInstruction === 2) {
      start = false;
    } else {
      console.log(`Enter a valid number`);
    }
  }
};

startGame();
