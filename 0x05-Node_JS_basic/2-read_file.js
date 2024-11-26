const fs = require('fs');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8');
		if (data.length === 0) {
			throw new Error('Cannot load the data database');
		}
		const lines = data.split('\n').filter(line => line.trim() !== '');
		if (lines.length <= 1) {
			throw new Error('Cannot load the data database');
		}
		const students = {};
		
	}
};