var hello = "hello";
// 재선언 재할당이 가능하다.
var hello = "재선언"; 

function sayHello() {
    var hello = "hello world";
    console.log(hello);
}

if (true) {
    // function level scope
    var hello = "hello hello";
}

sayHello();
console.log(hello);