const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const user = prompt(`Please enter your name: `);

const numberGuessingGame = (range = 2, point = 0) => {
  const guessedNum = Number(
    prompt(`Welcome ${user} Guess a number between 1 and ${range}: `)
  );
  console.log(guessedNum);

  const rangeNumber = getRndInteger(1, range);
  if (guessedNum === rangeNumber) {
    point += 1;
    range += 1;
    numberGuessingGame(range, point);
  } else {
    console.log(`Game over`);
    console.log(`${user}, Your point is ${point}`);
  }
};

numberGuessingGame();