const readDataBase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDataBase(process.argv[2].toString()).then((students) => {
      const sendData = [];
      sendData.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let i = 0; i < keys.length; i += 1) {
        sendData.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }
      response.status(200).send(sendData.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDataBase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
