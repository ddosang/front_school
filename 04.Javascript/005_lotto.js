// 랜덤 숫자 뽑는함수
function randomFunc(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// 뽑은 번호 담을 배열 준비
let lottoArr = [];
// 6개 뽑아서 lottoArr에 담는함수
function lottoGenerator() {
    // 배열이 꽉차기 전까지 반복 (6개 까지)
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46);

        // 중복이 안되었다면 배열에 뽑은숫자 추가 (중복이 되었다면 if문에 못들어가서 추가하지않음) 
        if (!lottoArr.includes(result)) {
            lottoArr.push(result);
        }
    }

    return lottoArr;
}
console.log(lottoGenerator());
