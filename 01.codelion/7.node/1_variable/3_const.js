// 재선언, 재할당 불가능.
const hello = "first hello";
// hello = "second hello"; 

if (true) {
    // block level scope
    const hello = "second hello";
    console.log(hello);
}

console.log(hello);