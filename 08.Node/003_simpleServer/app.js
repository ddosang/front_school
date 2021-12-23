// 간단한 서버 만들기!
const http = require('http');
const fs = require('fs');
// 실행하면 자동적으로 main, favicon에 대한 request가 2 번 날아감.
const app = http.createServer(function(request, response) {
    let url = request.url;
    console.log(`request : ${request}`);
    console.log(`request : ${request.url}`);
    if (request.url == '/') {
        // 메인페이지 보여주기
        url = '/index.html';
    } else if (request.url == '/blog') {
        url = '/blog.html';
    } 
    else if (request.url == '/favicon.ico') {
        // favicon 을 못찾으면...
        // 근데 해킹을 대비해서 못찾아도 200을 내보내기도 한다.
        return response.writeHead(404);
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
    response.writeHead(200);
    // 응답이 끝날 때 해당 페이지를 열어줌.
    response.end(fs.readFileSync(__dirname + url));

});

// 3000번 포트에서 동작하게 한다.
app.listen(3000); 