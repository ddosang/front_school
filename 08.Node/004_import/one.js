import {이름, 나이, 한살더먹음, 값가져오기} from './two.js';

console.log(이름);
console.log(나이); //100
한살더먹음();
한살더먹음();
console.log(나이); //102 - export로 하니까 제대로 출력!!!
console.log(값가져오기()); // 102

// const 개인프로필 = require('./two');

// console.log(개인프로필.이름);
// console.log(개인프로필.나이); //100
// 개인프로필.한살더먹음();
// 개인프로필.한살더먹음();
// console.log(개인프로필.나이); //100
// console.log(개인프로필.값가져오기()); // 102