const fs = require('fs');
const startFolder = './test1/test.svg';
const finalFolder = './test2/test.svg';

const start = fs.readFile(startFolder, (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    const end = fs.writeFile(finalFolder, data, (err, data) => {
      if (err) {
        console.log('err', err);
      } else {
        fs.unlink(startFolder, (err, data) => {
          if (err) {
            console.log('err', err);
          } else {
            console.log('File moved to folder "test2"');
          }
        });
      }
    });
  }
});
