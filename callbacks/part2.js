const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  reader.question("Gimme a number: ", function (num) {
    sum += parseInt(num);
    console.log(`partial sum is ${sum}`);
    --numsLeft;
    if (numsLeft === 0) {
      completionCallback(sum);
    } else {
      addNumbers(sum, numsLeft, completionCallback);
    }
  });
}

addNumbers(0, 3, function(sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});
