// https://codingdojang.com/scode/408?answer=3194

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

let s = [1, 3, 4, 8, 13, 17, 20];
let arr = [];
for(let i = 0; i < s.length - 1; i++) {
    arr.push(s[i+1] - s[i]);
}

let result = arr.indexOf(Math.min(...arr));
console.log(`(${s[result]}, ${s[result + 1]})`);


// 나였다면?
let sub = 0;
let min = Number.MAX_SAFE_INTEGER; // Infinity 때리지 말자.
let minIndex = 0;
for(let i = 0; i < s.length - 1; i++) {
    sub = s[i+1] - s[i];
    if (min > sub) {
        min = sub;
        minIndex = i;
    }
}
console.log(`(${s[minIndex]}, ${s[minIndex + 1]})`);

// 호준쌤이라면?
// 두개씩 array에 넣어놓고 이용할듯.
const zip = (a,b) => a.map((value, index) => [value, b[index]]);
let pairs = zip(s.slice(0, s.length-1), s.slice(1));
// 그리고 정렬 메소드를 이용해서 정렬.
// 대신 문제 상황에 맞춰서 차를 가지고 한다.
function compare(a, b) {
    if( a[1] - a[0] < b[1] - b[0] ) {
        return -1;
    }
    if ( a[1] - a[0] > b[1] - b[0] ) {
        return 1;
    }
    return 0;
}
pairs.sort(compare);
console.log(pairs[0]);
