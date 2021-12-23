// 공식문서 링크  : https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir
1
// let 변수 = 'ddosang' // 사용자 이름
// let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// })

// 2
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 2
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 3
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err)
// });

// // 4
// fs.appendFile('./test2.txt', 'hello world 3', (err)=>{
//     console.log(err)
// });

// 5
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err)
// });

// // 6
// fs.mkdir('./yoyo', (err)=>{
//     console.log(err)
// });