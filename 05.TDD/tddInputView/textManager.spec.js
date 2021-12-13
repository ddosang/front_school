describe('텍스트 관리자입니다.', () => {
    // beforeEach : it 함수 호출 직전에 실행.
    // 각 it에서 겹치는 부분은 이렇게  로 빼서 사용한다.
    let textManger;
    beforeEach(() => {
        textManager = new TextManager();
    })
    it('텍스트 값을 전달합니다', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })
    it('텍스트 값을 수정합니다.', () => {
        const newText = { data: 'Hello Zebras' };
        textManager.setValue(newText);
        expect(textManager.getValue()).toBe(newText.data);
    })
})