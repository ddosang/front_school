// 공식문서 링크  : https://nodejs.org/dist/latest-v14.x/docs/api/path.html
const path = require('path');

console.log(`구분자 : ${path.sep}`); // 구분자는 OS마다 다를 수 있다. 경로를 사용할 때 / 말고 path.sep으로 나타내야한다.
// 이런건 직접 만들면 안된다!!!! 가져다 쓰자.
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source')); // 합칠때 꼭 path.join으로 합치자.
