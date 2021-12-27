// 재할당만 가능.
let hello = "first hello";
hello = "second hello";

if (true) {
    // block level scope
    let hello = "third hello";
    console.log(hello);
}

console.log(hello);