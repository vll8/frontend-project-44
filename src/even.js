// авторизация и приветсвие игрока
import readlineSync from 'readline-sync';

const helloUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  return userName;
};
const userName = helloUserName();

// генерация случайного числа от 1 до 100
const getrandomNumber = () => {
  const start = 1;
  const end = 100;
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

// проверка на четность этого числа
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// проверка корректности ответа игрока
const isReplyCorrect = (replyUser, even) => {
  const yes = 'yes';
  const no = 'no';
  const correct = 'Correct!';
  const gameOver = `'${replyUser}' is wrong answer ;(. Correct answer was '${even}'.\nLet's try again, ${userName}!`;
  if (replyUser === 'yes' && even === yes) {
    return correct;
  }
  if (replyUser === 'no' && even === no) {
    return correct;
  }
  return gameOver;
};

// исполнение игры
const playAnEvenOdd = () => {
  let i = 0;
  let result = '';
  const correct = 'Correct!';
  while (i < 3) {
    const randomNumber = getrandomNumber();
    console.log(`Question: ${randomNumber}`);

    const even = isEven(randomNumber);

    const replyUser = readlineSync.question('Your answer: ');
    result = isReplyCorrect(replyUser, even);
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

export default playAnEvenOdd;
