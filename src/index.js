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
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGameLogic;
