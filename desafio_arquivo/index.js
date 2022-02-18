const fs = require('fs');
const path = require('path');

const filePath0 = path.join(__dirname, 'arquivo.txt');
const filePath1 = path.join(__dirname, 'file1.txt');
const filePath2 = path.join(__dirname, 'file2.txt');
const filePath3 = path.join(__dirname, 'file3.txt');
const filePath4 = path.join(__dirname, 'file4.txt');
const filePath5 = path.join(__dirname, 'file5.txt');
const filePath6 = path.join(__dirname, 'file6.txt');

const data = `${fs.readFileSync(filePath1,'utf-8')}
\n${fs.readFileSync(filePath2,'utf-8')}
\n${fs.readFileSync(filePath3,'utf-8')}
\n${fs.readFileSync(filePath4,'utf-8')}
\n${fs.readFileSync(filePath5,'utf-8')}
\n${fs.readFileSync(filePath6,'utf-8')}`;
//console.log('Resposta do readFileSync?', data);


fs.writeFile('hino.txt', data, (err) => {
  if (err) throw err;
  console.log('O arquivo foi criado!');
});

fs.unlinkSync('file1.txt');
fs.unlinkSync('file2.txt');
fs.unlinkSync('file3.txt');
fs.unlinkSync('file4.txt');
fs.unlinkSync('file5.txt');
fs.unlinkSync('file6.txt');