const TextManager = (function () {
    let value = { data: "Hello Lions!"};
    function innerTextManager() { }
    innerTextManager.prototype.getValue = function () {
        return value.data;
    }
    innerTextManager.prototype.setValue = function(data) {
        value = data;
    }
    return innerTextManager;
})();