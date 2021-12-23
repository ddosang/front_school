const 개인프로필 = require('./two');

console.log(개인프로필.이름);
console.log(개인프로필.나이); //100
개인프로필.한살더먹음();
개인프로필.한살더먹음();
console.log(개인프로필.나이); //100
console.log(개인프로필.값가져오기()); // 102