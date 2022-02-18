const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'arquivo.txt');

//readFile callback
//fs.readFile(filePath, 'utf-8', (err, data) => {
//  console.log('Retornou dados do arquivo\n', data);
//});

//readFile sincrono
//const data = fs.readFileSync(filePath, 'utf-8');
//console.log('Resposta Síncrona readFileSync ', data);


//fs.promise.readFile (.then(callback))
function lerArquivo(nome){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Olá pelo Promise, ' + nome);
    }, 1000);
  });
}



//chamando promise
lerArquivo('Vou ler Promise').then((res) => {
  console.log(res);
});


fs.promises
  .readFile(filePath, 'utf-8')
  .then((res) => {
    console.log('Isso ta acontecendo  dentro da Promise\n',res);
  });
