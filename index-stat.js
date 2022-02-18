const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
  files.forEach(f => {
    const fPath = path.join(__dirname, f);
    fs.stat(fPath, (_, fileStats) => {
      console.log(`File: ${f}\t isFile: ${fileStats.isFile()}\tisDir: ${fileStats.isDirectory()}`);
    });
  });
  //console.log(data);
});

//\t dá um tag, para por os espaços no meio antes de isFile

/**
File: Capturar2.PNG      isFile: true
File: Capturar3.PNG      isFile: true
File: Capturar4.PNG      isFile: true
File: Capturar5.PNG      isFile: true
File: Capturar6.PNG      isFile: true
File: exemplo_arquivo    isFile: false
File: file.txt   isFile: true
File: file2.txt  isFile: true
File: index-exe.js       isFile: true
File: index-restaurant.js        isFile: true
File: index-stat.js      isFile: true
File: index.js   isFile: true
File: index2.js  isFile: true
File: index_readdir.js   isFile: true
File: README.md  isFile: true
File: restaurant.js      isFile: true
File: user.js    isFile: true */


/*fs.readdir(__dirname, (err, files) => {
  files.slice(-1).forEach(f => {
    const fPath = path.join(__dirname, f);
    fs.stat(fPath, (_, fileStats) => {
      console.log(fileStats);
    });
  });
  //console.log(data);
});*/