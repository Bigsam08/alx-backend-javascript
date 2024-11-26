const { readFile } = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(path, (error, res) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students: ${len}`);
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
          }
        }
        resolve(res);
      }
    });
  });
}

module.exports = countStudents;
