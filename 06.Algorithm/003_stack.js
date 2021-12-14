class Stack {
    constructor() {
        this.arr = [];
    }
    push(data) {
        this.arr.push(data);
    }
    pop(index = this.arr.length - 1) {
        // 원래는 index 없지만 넣어서 구현해 봄.
        if (index === this.arr.length - 1) {
            return this.arr.pop();
        }
        let result = this.arr[index];
        this.arr = [...this.arr.slice(0, index)] + [...this.arr.slice(index + 1)];
        return result;
    }
    empty() {
        return (this.arr.length == 0) ? true : false;
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
    bottom() {
        return this.arr[0];
    }
}