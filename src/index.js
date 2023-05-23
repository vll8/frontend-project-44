import readlineSync from 'readline-sync';

const helloUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getGameLogic = (game, gameRules) => {
  const raund = 3;
  const userName = helloUserName();
  console.log(`Hello, ${userName}!\n${gameRules}`);
  for (let i = 0; i < raund; i += 1) {
    const [task, answer] = game();
    console.log(`Question: ${task}`);
    const correctAnswer = answer;
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = 'Correct!';
    const gameOver = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    if (userAnswer !== correctAnswer) {
      console.log(gameOver);
      return;
    }
    console.log(correct);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGameLogic;
