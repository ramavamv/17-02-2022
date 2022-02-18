const fsPromise = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'file2.txt');

fsPromise
  .readFile(filePath, 'utf-8')
  .then(res => {
    const lines = res.split('\n');
    console.log(lines[0]);
  })
  .catch(err => {
    console.log('erro', err);
  });

//await fsPromise.readFile()
//por padrão funções assincronas retornam promise
async function leArquivoAsync() {
  try{
    const data = await fsPromise.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    console.log('[leArquivoAsync]', lines[0]);
  } catch (err){
    throw new Error('não deu pra ler :-(');
  }
}
//console.log(leArquivoAsync);

leArquivoAsync().then(res => { 
  console.log(res);
});


