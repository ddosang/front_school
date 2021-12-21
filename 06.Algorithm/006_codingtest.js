
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
// 링크 : https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 1번 오픈채팅방 문제

let test = [
    'A 10 !',
    'B 20 !',
    'A 22 @',
    'B 20 @',
    'A 21 @'
]

result = []

test.forEach((el) =>{
    const [하나, 둘, 셋] = el.split(' ');
    if (하나 === 'A') {
        if (둘 >= 20) {
            result.push([둘, 셋]);
        }
    }
});

result


// step 1
let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = [];
    let users = {};

    for (const iterator of record) {
        const [상태, 아이디, 닉네임] = iterator.split(' ');
        answer.push([상태, 아이디, 닉네임]);
    }

    return answer;
}

solution(record);

// step 2
let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let result = [];
    let answer = [];
    let 유저정보 = {};

    for (const iterator of record) {
        const [상태, 아이디, 닉네임] = iterator.split(' ');
        if (상태 === 'Enter'){
            유저정보[아이디] = 닉네임;
            result.push([아이디, '님이 들어왔습니다.']);
        } else if (상태 === 'Leave'){
            result.push([아이디, '님이 나갔습니다.']);
        } else if (상태 === 'Change'){
            유저정보[아이디] = 닉네임;
        }
    }

    // 지금 우리 데이터
    // [[uid1234, 님이 들어왔습니다.], [uid4567, 님이 들어왔습니다.]]
    
    for (const [아이디, 메시지] of result) {
        answer.push(유저정보[아이디] + 메시지);
    }

    return answer;
}

solution(record);

// 2번 실패율
// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N	stages                  	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3, 4, 2, 1, 5]
// 4	[4, 4, 4, 4, 4]	            [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0


// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)


// [2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3);
// (2) [3, 3]

// step 1
function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        실패율.push(도달한사람수);
    }
    return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);


// step 2
function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수/유저수;
        유저수 -= 도달한사람수;
        실패율.push({stage : i, 확률 : 확률});
    }
    return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// [
//     {stage: 1, 확률: 0.125},
//     {stage: 2, 확률: 0.42857142857142855},
//     {stage: 3, 확률: 0.5},
//     {stage: 4, 확률: 0.5},
//     {stage: 5, 확률: 0}
// ]

// result
// [3, 4, 2, 1, 5]



// step 3
function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수/유저수;
        유저수 -= 도달한사람수;
        실패율.push({stage : i, 확률 : 확률});
    }

    // sort의 내림차순
    // b - a
    // sort의 오름차순
    // a - b
    실패율.sort((a, b) => {
        if (a.확률 === b.확률){
            return a.stage - b.stage;
        } else {
            return b.확률 - a.확률;
        }
    });

    return 실패율.map(object => object.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 3. 20년도
// 링크 : https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/
// aabbaccc -> a, a, b, b, a, c, c, c -> 2a2ba3c
// aabbaccc -> aa, bb, ac, cc -> aabbaccc
// aabbaccc -> aab, bac, cc -> aabbaccc
// aabbaccc -> aabb, accc -> aabbaccc

// 'aabbaccc'.match(/[a-z]{1}/g);
// 'aabbaccc'.match(/[a-z]{2}/g);

// step 1
function solution(s) {
    let answer = s.length;
    let len = s.length;

    for (let i = 1; i < len/2 + 1; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re);
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
    }
    return answer;
}

solution('aabbaccc');


// step 2
function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){ //자르는 크기
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re)
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열)
        압축문자열 = ''
        let count = 1 //2a2b3c 여기서 앞에 나오는 숫자
        for (j = 0 ; j < 잘린문자열.length; j++) {
            if (잘린문자열[j] === 잘린문자열[j+1]) {
                //aa -> 2a // 뒤에 값을 봐서 같은지!
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
                압축문자열 += `${count}${잘린문자열[j]}`;
                // 앞 문자열과 뒤 문자열이 다른 경우는
                count = 1;
            }
            console.log(압축문자열);
        }
        console.log(압축문자열);
    }
    return answer;
}

solution("aabbaccc")
solution("aabbaabbaccc") // accc를 추가하지 못하는 문제 발생


// step 3
function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){ //자르는 크기
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        // console.log(re)
        let 잘린문자열 = s.match(re);
        // console.log(잘린문자열)
        압축문자열 = ''
        let count = 1 //2a2b3c 여기서 앞에 나오는 숫자
        for (j = 0 ; j < 잘린문자열.length; j++) {
            if (잘린문자열[j] === 잘린문자열[j+1]) {
                //aa -> 2a // 뒤에 값을 봐서 같은지!
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
                압축문자열 += `${count}${잘린문자열[j]}`;
                // 앞 문자열과 뒤 문자열이 다른 경우는
                count = 1;
            }
            // console.log(압축문자열);
        }
        if (len % i !== 0){
            압축문자열 += s.slice(-len % i)
        }
        // console.log(압축문자열);
        answer = Math.min(answer, 압축문자열.length)
    }
    return answer;
}

solution("aabbaccc")
solution("aabbaabbaccc") // accc를 추가하지 못하는 문제 발생


// 번외
// 입력 예시: aaabbcccccca
// 출력 예시: a3b2c6a1

let s = 'aaabbcccccca';
let 압축 = '';
let count = 1

for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]){
                count += 1
    } else if (count >= 1) {
        압축 += `${s[i]}${count}`;
        count = 1;
    }
}

console.log(압축);



// why?
// for (const index in s) {
//     console.log(s[index] === s[index+1])
//     console.log(s[index], s[index+1])
//     // if (s[index] === s[index + 1]){
//     //     count += 1
//     // } else if (count >= 1) {
//     //     압축 += `${s[index]}${count}`;
//     //     count = 1;
//     // }
// }



// 3. 20년도
// 4. 21년도