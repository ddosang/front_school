const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// 원본 데이터를 건드림..
// aespa.forEach((item, index) => {
//     aespa[index] = item + '💖';
// });

const aespa2 = aespa.map((item) => item += '💖');

console.log(aespa2);
console.log(aespa);