const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file2.txt');
const t1 = Date.now();

const data = fs.readFileSync(filePath, 'utf-8');
const lines = data.split('\n');
console.log('Isso ta rodando depois do readFileSync\n', lines[1]);
console.log('Isso ta depois do readFileSync', (Date.now() - t1 / 1000));

function readCallBack(err, data) {
  const lines = data.split('\n');
  console.log('Isso ta rodando no callback no readFile\n', lines[0]);
  //console.log(lines.slice(-1));//última posição
  console.log('tempo dentro do callback', (Date.now() - t1 / 1000));
}

fs.readFile(filePath, 'utf-8', readCallBack);
console.log('e aqui tem algo muito importante ');
console.log('tempo antes da callback', (Date.now() - t1) / 1000);