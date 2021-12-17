
// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 주제 : 2진법, 진법 연산, replace, or 연산
[9, 20, 28, 18, 11]
[30, 1, 21, 17, 28]
let x = 9;
x.toString()
x.toString(2)
x.toString(8)
x.toString(16)

let x = 9;
let y = 30;

x.toString(2);
y.toString(2);

'01001'
'11110'
'-----'
'11111'

'01001'
'11110'
'-----'
'11111'


let z = '11111';
z.replace(/1/g, '#').replace(/0/g, ' ')
'#####'

(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(9 & 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(5 | 3).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(31 | 14).toString(2).replace(/1/g, '#').replace(/0/g, ' ');

'00101'
'00011'
'-----'
'  ###'

// || - or
// && - and
// ! - not

/////////////////////

100000 - 1 == 11111;

(9 | 30)
.toString(2)
.replace(/1/g, '#')
.replace(/0/g, ' ');

////////////////////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push((arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' '));
    }
    return result;
}

console.log(solution(n, arr1, arr2));


////////////////////

// 유틸리티 모듈

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);

const fillZero = (n, arr) => { return '0'.repeat(n - arr.length) + arr }

////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    // const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
    const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ')));
    }
    return result;
}

console.log(solution(n, arr1, arr2));

////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
    const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
    for (let [i, j] of zip(arr1, arr2)) {
        result.push(fillSpace(n, (i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' ')));
    }
    return result;
}

console.log(solution(n, arr1, arr2));


////
// 다트 게임
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 문자열 파싱(Parsing)


testcase = [
    '1S2D*3T',
    '1D2S#10S',
    '1D2S0T'
];

for (const c of testcase) {
    console.log(solution(c));
}

// 37, 9, 3

//step1
const dartResult = '1S2D3T'
let answer = [];
let result = 0;
let temp = 0; // 임시점수

for (let i = 0; i < dartResult.length; i++) {
    // console.log(dartResult[i]);
    if (dartResult[i] >= 0 && dartResult[i] <=9 ) {
        temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == 'S'){
        answer.push(temp);
    } else if (dartResult[i] == 'D'){
        // answer.push(Math.pow(temp, 2));
        answer.push(temp**2);
    } else if (dartResult[i] == 'T'){
        // answer.push(Math.pow(temp, 3));
        answer.push(temp**3);
    }
}

console.log(answer);


//step2
const dartResult = '1D2S#10S'
let answer = [];
let result = 0;
let temp = 0; // 임시점수

for (let i = 0; i < dartResult.length; i++) {
    // console.log(dartResult[i]);
    if (dartResult[i] >= 0 && dartResult[i] <=9 ) {
        if (dartResult[i] == 1 && dartResult[i+1] == 0) {
            temp = 10;
            i++;
        } else {
            temp = parseInt(dartResult[i]);
        }
    } else if (dartResult[i] == 'S'){
        answer.push(temp);
    } else if (dartResult[i] == 'D'){
        // answer.push(Math.pow(temp, 2));
        answer.push(temp**2);
    } else if (dartResult[i] == 'T'){
        // answer.push(Math.pow(temp, 3));
        answer.push(temp**3);
    } else if (dartResult[i] == '*'){
        answer[answer.length-1] *= 2
        answer[answer.length-2] *= 2
    } else if (dartResult[i] == '#'){
        answer[answer.length-1] *= -1
    }
}
for (let i = 0; i < answer.length; i++) {
    result += answer[i];
}

console.log(answer);

// step3
function solution(dartResult) {
    let answer = [];
    let result = 0;
    let temp = 0; // 임시점수
    
    for (let i = 0; i < dartResult.length; i++) {
        // console.log(dartResult[i]);
        if (dartResult[i] >= 0 && dartResult[i] <=9 ) {
            if (dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] == 'S'){
            answer.push(temp);
        } else if (dartResult[i] == 'D'){
            // answer.push(Math.pow(temp, 2));
            answer.push(temp**2);
        } else if (dartResult[i] == 'T'){
            // answer.push(Math.pow(temp, 3));
            answer.push(temp**3);
        } else if (dartResult[i] == '*'){
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
        } else if (dartResult[i] == '#'){
            answer[answer.length-1] *= -1;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        result += answer[i];
    }
    return result;
}


//////////
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시문제
// 키워드 : LRU 알고리즘, 페이지 교체 알고리즘
// 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
// 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
// 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60

testcase = [
    [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
    [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
    [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
];

for (const [cacheSize, cities] of testcase) {
    console.log(solution(cacheSize, cities));
}

// 50, 21, 60

function solution(cacheSize, cities) {
    let time = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        let index = cache.indexOf(city);
        if (index !== -1) {
            // hit
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            // miss
            time += 5;
            cache.push(city);
            if (cacheSize < cache.length) {
                cache.shift();
            }
        }
    }
    return time;
}


// 2. 19년도
// 3. 20년도
// 4. 21년도