
// 테스트 유닛들의 모음
describe('쟈스민 테스트 입니다.', () => {
    // it : 테스트 유닛 1 (덧셈 함수)
    it('덧셈을 하는 함수입니다.', () => {
        let num = 10;

        // expect : 실행할 함수의 결과값을 인수로 전달한다.
        // toBe : 내가 기대한 결과를 넣으면 일치하는지 판단해줌.
        expect(plusOne(num)).toBe(num+1); 
    });
});