import readlineSync from 'readline-sync';

const helloUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);
  return userName;
};
const userName = helloUserName();

const getRandomNumber = (start, end) => (Math.floor(Math.random() * (end - start + 1)) + start);

const getRandomOperation = () => {
  const sum = '+';
  const sub = '-';
  const multiplication = '*';
  const operation = getRandomNumber(1, 3);
  let result = '';

  if (operation === 1) {
    result = sum;
  } else if (operation === 2) {
    result = sub;
  } else {
    result = multiplication;
  }
  return result;
};

const calculateResultOperation = (a, operation, b) => {
  let result = 0;
  if (operation === '+') {
    result = a + b;
  } else if (operation === '-') {
    result = a - b;
  } else {
    result = a * b;
  }
  return result;
};

const isReplyCorrect = (replyUser, calculatedResult) => {
  const correct = 'Correct!';
  const gameOver = `'${replyUser}' is wrong answer ;(. Correct answer was '${calculatedResult}'.\nLet's try again, ${userName}!`;
  if (replyUser === calculatedResult) {
    return correct;
  }
  return gameOver;
};

const playCalc = () => {
  let i = 0;
  let result = '';
  const correct = 'Correct!';
  while (i < 3) {
    const randomOperation = getRandomOperation();
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);

    const resultOperation = calculateResultOperation(randomNumber1, randomOperation, randomNumber2);

    const replyUser = Number(readlineSync.question('Your answer: '));
    result = isReplyCorrect(replyUser, resultOperation);
    if (result !== correct) {
      console.log(result);
      break;
    } else {
      console.log(result);
      i += 1;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playCalc();
