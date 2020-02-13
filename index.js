const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.

  // guess a random number, and ask if it's correct
  let guess = 50
  let response = 'yes'

  // if the player says "yes" exit the game
  //if (response === 'yes') {
  //  process.exit()
  //}
  // if the player says no
  while (true) {
    response = await ask('is it ' + guess)
    //ask if it's higher or lower
    // if it's higher modify min value
    // if it's lower modify max value
    //guess a new number
    if(response === 'yes') {
      break
      //take some action
    }
    console.log('down here response is: ' + response)
  }
  console.log('some victory message')
  process.exit();
}
