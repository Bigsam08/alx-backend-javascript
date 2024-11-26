/**
 * using the process stdin and stdout to give prompt
 * and write message to the user on the console
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  process.stdout.write(`Your name is: ${input.toString()}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
