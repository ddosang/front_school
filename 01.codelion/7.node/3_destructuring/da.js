// 구조 분해 할당
// object, 배열 .. 에서 사용 가능.
const object = { a : 1, b : 2 };

// const a = object.a;
// const b = object.b;

const { a, b } = object;

console.log(a, b);