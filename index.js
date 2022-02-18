const { NOMEM } = require('dns');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path/posix');

//SINTAXE COM FUNÇÃO DE CALBACK
//__dirname = diz o diretorio que estou, que ta o arquivo, ele já é setado pelo node como variável global
//__filename = será ele mesmo
//path.join = ajuda pois ao invés do caminho do sistemas ser com \\, e linux / usa esta biblioteca pra conseguir ler o arquivo
const filePath = path.join(__dirname,'file.txt'); //passa por vírgulas os parâmetros
fs.readFile(filePath, 'utf-8', (err, data) => {
  console.log('Retornou dados do redaFile',data);
});

//console.log('Final?');

//como ele é assincrono roda o readFile foi agendado

//exemplo SINCRONO
const data = fs.readFileSync(filePath,'utf-8');
console.log('Resposta do readFileSync?', data);
console.log('Agora sim é Final?');

/*fs.writeFile(filePath, 'Novos dados', () => {
  console.log('Escrevi dados novos');
});*/


//COMO CRIA PROMISE
function cumprimenta(nome) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Olá, ' + nome);
    }, 2000);
  });
}

//COMO CHAMA
cumprimenta('Rafael').then((res) => {
  console.log(res);
});

//CHAMA DE NOVO UMA PROMISE
fs.promises
  .readFile(filePath, 'utf-8')
  .then((res) => {
    console.log('Isso ta acontecendo  dentro da Promise\n',res);
  });



  //readdir