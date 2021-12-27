const http = require("http");

// http : 서버를 쉽게 구축할 수 있게 하는 모듈.
http
    // createServer : 서버를 구축하고, callback 함수를 통해 요청, 응답을 처리하는 함수.
    .createServer((request, response) => {
        if(request.url === "/") {
            // 잘 들어가면 200
            response.writeHead(200); 
            response.end("main url");
        } else if (request.url === "/upload") {
            response.writeHead(200);
            response.end("upload url")
        } else if (request.url === "/delete") {
            response.writeHead(200);
            response.end("delete url");
        } else {
            response.writeHead(404);
            response.end("Not found!!");
        }
    }).listen(3000, () => {
        console.log("3000번 포트 서버 접속 완료!");
    });