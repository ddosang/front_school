// 화면 출력 방법 4가지
console.log("hello");
document.write("hi");
document.getElementById('id').innerHTML = 'hello world';
window.alert("warning");


// 어떤 것의 정체를 알고 싶을 때
console.dir(window); // window를 Control 하기 위해 정의해 놓은 것들.
window.console //접근방법 .(멤버 접근 연산자)


// 많이 사용
console.error('hello') // error msg에 hello
console.table // list를 table 형태로 출력해줌.


// 변수 선언
let a = 100;
