function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello);
        // reject(new Error());
    });
}


// sayHello()
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     })
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     })
//     .then((resolvedData) => {
//         console.log(resolvedData);
//     })
//     .catch((error) => {
//         console.log(error)
//     });

async function test() {
    // await : 해당 함수의 실행이 끝난 다음에 밑에 있는 코드를 실행하겠다.
    // await를 쓰려면 함수에 async를 명시해야 한다.
    const hello1 = await sayHello();
    console.log(hello1);
}

test();