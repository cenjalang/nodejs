var  http  =  require('http');
var  optfile  =  require('./models/optfile');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        console.log('访问');
        // optfile.readfile("G:\\nodejs\\one\\models\\aa.txt");
        optfile.readfileSync("G:\\nodejs\\one\\models\\aa.txt");
        console.log('hello,world');
        response.end('hello,世界');//不写则没有http协议尾
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');