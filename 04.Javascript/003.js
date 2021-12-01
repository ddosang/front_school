//1 평균과 표준편차
let arr1 = [10,20,30,10,20,30,40,10];
let sum = 0;
for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
let avg = sum / arr1.length;

sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += (arr1[i] - avg)**2
}
let standardDeviation = (sum / arr1.length) ** 0.5;

console.log(avg, standardDeviation);


//2
let s = '5, 4, 10, 2, 5';
let sum = 0;
let count = 0;
let local = '';
for (let x of s) { 
    if (x == '0' || !!Number(x)) {
        local += x;
    } else if (x == ',') {
        sum += Number(local);
        count += 1;
        local = '';
    }
}
sum += Number(local);
count += 1;
local = '';

console.log(sum/count);

//3
var arr = [11,22,33,111,2];
var str = '';
for (let i = 0; i < arr.length; i++) {
    str += arr[i];
}

var sum = 0;
for (let i = 0; i < str.length; i++) {
    sum += +str[i];
}
console.log(sum);


// 큰 2번

var n = 100000000;
var strN = n + '';
var answer = '';
var count = 0;
for (let i = strN.length-1 ; i >= 0 ; i--) {
    answer += strN[i];
    count += 1;
    if (count == 3 && i != 0) {
        answer += ',';
        count = 0;
    }
}

var realAnswer = '';
for (let i = answer.length - 1 ; i >= 0; i--) {
    realAnswer += answer[i];
}

if (realAnswer[0] == ',') {
    realAnswer = realAnswer.substr(1, realAnswer.length - 1);
}

console.log(realAnswer);

let ans = '';
for (let x of realAnswer) {
    if (x != ',') {
        ans += x;
    }
}

console.log(ans);


// 각 반의 평균 구하기

let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];

let personTotal = 0;
let personAvg = [0, 0];
let classTotal = 0;
let classAvg = [0, 0];

for (let i = 0; i < 전교점수.length; i++) {
    classTotal = 0;
    for (let j = 0; j < 전교점수[0].length; j++) {
        personTotal = 0;
        for (let k = 0; k < 전교점수[0][0].length; k++) {
            personTotal += 전교점수[i][j][k];
        }
        // 각 사람의 평균을 반 총 점수에 더하고
        classTotal += personTotal / 전교점수[0][0].length; 
    }
    // 각 반 평균은 배열에 저장.
    classAvg[i] = classTotal / 전교점수[0].length;
}

console.log(classAvg);