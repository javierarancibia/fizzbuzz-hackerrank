function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 && i % 5) {
      console.log('FizzBuzz');
    }
    if (i % 3) {
      console.log('Fizz')
    }
    if (i % 5) {
      console.log('Buzz');
    }
    console.log(i);
  }
}

function main() {
  const n = 15;

  fizzBuzz(n);
}

main();
