const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file2.txt');

fs.promises
  .readdir(process.cwd())
  .then(res => {
    for (let filename of res) {
        console.log(filename)
    }
})

// If promise is rejected
.catch(err => {
    console.log(err)
})

