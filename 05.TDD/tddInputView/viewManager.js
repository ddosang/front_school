function ViewManager(textManager, options) {
    if(!textManager || !options.btnEl || !options.viewerEl || !options.inpTxt) {
        // null이 하나라도 있을 때
        // 사용자 정의 오류를 만들고 프로그램 종료.
        throw Error('전달 인자 중에 빈 값이 존재합니다.');
    }

    this.textManager = textManager;
    this.viewerEl = options.viewerEl;
    this.inpTxt = options.inpTxt;

    options.btnEl.addEventListener('click', () => {
        this.changeValue();
    })
}

// 버튼을 누르면 값을 세팅.
ViewManager.prototype.changeValue = function() {
    this.textManager.setValue({ data: this.inpTxt.value });
    this.updateView();
}

ViewManager.prototype.updateView = function () {
    this.viewerEl.textContent = this.textManager.getValue();
}