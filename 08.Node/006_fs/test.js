const fs = require('fs');

// fs.readFile('./username.csv', 'utf8', (err, data) => {
//     const dataArr = data.split('\n').map(item => item.split(', '));
//     for(let i = 1; i < dataArr.length; i++){
//         fs.mkdir(`./${dataArr[i][0]}`, (err)=>{
//             console.log(err)
//         });
        
//         for (let j = 0; j < dataArr[0].length; j++) {
//             fs.appendFile(`./${dataArr[i][0]}/userinfo.txt`, `${dataArr[0][j]} : ${dataArr[i][j]}\n`, (err)=>{
//                 console.log(err)
//             });
//             // console.log(`${dataArr[0][j]} : ${dataArr[i][j]}`);
//         }
//     }
// });


// 다른 분 코드를 보고 보완한 코드!!
fs.readFile('./username.csv', 'utf8', (err, data) => {
    const splitedData = data.split('\n').map(info => info.split(', '));
    const columnTitle = splitedData[0];
    splitedData.slice(1)
        .forEach((personData) => {
            username = personData[0];
            fs.mkdir(`./${username}`, (err) => {});
            for (i in personData) {
                console.log(i);
                fs.appendFile(`./${username}/userinfo.txt` ,`${columnTitle[i]} : ${personData[i]}\n`, (err) => {});
            }
        });
});
