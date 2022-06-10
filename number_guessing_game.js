const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const checkCookie = () => {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
};

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
