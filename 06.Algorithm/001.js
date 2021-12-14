// https://codingdojang.com/scode/393?answer_mode=hide

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;


let x2 = Array(10);
x2.length = 20; // Array(20) 과 같아짐.


Array(10).fill(0);
Array(10).fill(10);

Array(100).fill(1).map((value, index) => value + index);
Array(100).fill().map((_, i) => i + 1)
'.'.repeat(9).split('.');  // 10개 짜리 array
Array.from('abc');
Array.from('a'.repeat(10));
Array.from('ab'.repeat(10)); // a b 10개씩.

// 와 천잰데 배열에 있는 것을 문자열로 다 합쳐놓고
// 8을 기준으로 나누면 8개수 + 1 만큼 나눠지니깐
// -1 하면 8의 갯수가 나온다.
Array(100).fill(1).map((value, index) => value + index + '').split('8').length - 1;