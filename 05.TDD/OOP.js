// 1. 모듈 패턴
// age는 직접 접근 불가능. 숨겨진 값임.
// 객체를 반환하는 것도 아님.
function person() {
    let age = 123;
    return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
    }
}

// 2. 사용자 정의 타입 패턴
// 인스턴스에서 접근 가능하기 때문에 age는 숨겨진 값이 아님.
function PersonType() {
    this.age = 135;
}
PersonType.prototype.getage = function () {
    return this.age
}

const instancePerson = new PersonType();

let person2 = { age: 35 };

//  3. 모듈 + 사용자 정의 타입 패턴
// 인스턴스를 효율적으로 생성하면서 값을 은닉.
function PersonType2() {
    let age = 142; // closure 공간.

    function innerPersonType() {
    }

    innerPersonType.prototype.getAge = function() {
        return age;
    }

    return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
person3.getAge()