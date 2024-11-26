const http = require('http');
const { readFile } = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(path, (error, res) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = res.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const len = length - 1;
        output += `Number of students: ${len}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            output += `Number of students in ${k}: ${v}. `;
            output += `List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const OutString = output.slice(0, -1);
        res.end(OutString);
      }).catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245, 'localhost');

module.exports = app;
