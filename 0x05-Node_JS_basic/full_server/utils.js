const { readFile } = require('fs');

module.exports = function readDatabase(path) {
  const students = {};
  return new Promise(((resolve, reject) => {
    readFile(path, (err, res) => {
      if (err) {
        reject(err);
      } else {
        const lines = res.toString().split('\n');
        const noHead = lines.slice(1);
        for (let i = 0; i < noHead.length; i += 1) {
          if (noHead[i]) {
            const field = noHead[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  }));
};
