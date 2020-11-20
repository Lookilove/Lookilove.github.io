const request = require('request');

const resultArr = [];
const searchImg = '<img class="img" loading="lazy" src="';

request('https://dou.ua/', (error, response, body) => {
  let i = 1;
  const temp = [];
  temp[0] = body.indexOf(searchImg);
  let indexTemp = temp[0];

  while (body.indexOf(searchImg, indexTemp + 1) !== -1) {
    temp[i] = body.indexOf(searchImg, indexTemp + 1);
    indexTemp = temp[i];
    i++;
  };

  for (let k = 0; k < 6; k++) {
    const tempSearch = temp[k] + searchImg.length;
    const tempFinishSearch = body.indexOf('"', tempSearch + 1);
    resultArr[k] = body.substr(tempSearch, tempFinishSearch - tempSearch);
    console.log(resultArr[k]);
  }
});
