describe('click event handling과 view를 담당하는 함수입니다.', () => {
    // dependency injection (의존 주입) : 다른 객체를 자신에게 주입시켜야만 사용할 수 있음.
    // view는 textManager를 전달받아야 사용할 수 있다.
    let textManager, viewerEl, btnEl, inpTxt, viewManager;
    beforeEach(() => {
        textManager = new TextManager();
        viewerEl = document.createElement('strong');
        btnEl = document.createElement('button');
        inpTxt = document.createElement('input');
        viewManager = new ViewManager(textManager, {viewerEl, btnEl, inpTxt});
    });

    it('viewManager에 인자가 잘 전달됐는지 확인합니다.', () => {
        const textManager = null;
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;

        // 인자가 전달되는지 확인하는 함수.
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        // 값을 전달해주는 함수 actual이니까, 값이 제대로 전달됐는지를 확인하면 됨.
        // expect(함수) 로 실행할 수 있는 함수를 전달해야 한다.
        expect(actual).toThrowError();
    })

    it('click event가 발생했을 경우 changeValue 함수를 실행합니다.', () => {
        // spyOn : 특정 모듈의 함수 감시
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        // toHaveBeenCalled : 함수가 호출이 된 적이 있는지 판별 - spyOn이 있어야 함.
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it('updateView 함수를 실행합니다.', () => {
        // updateView는 changeValue가 일어나면 바로 실행.
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        expect(viewManager.updateView).toHaveBeenCalled();
    })
})