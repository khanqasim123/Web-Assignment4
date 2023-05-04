const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of seconds to set the timer: ', (time) => {
  console.log(`Timer set for ${time} seconds`);

  let countdown = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(countdown);
      console.log("Timer ended");
    } else {
      console.log(`Time remaining: ${time} seconds`);
    }
  }, 1000);
});
