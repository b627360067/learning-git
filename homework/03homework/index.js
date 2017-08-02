/**
 * Created by dllo on 17/8/2.
 */
var http=require('http');
var url=require('url');
var fs = require('fs');
var path = require('path');
var server=http.createServer(function (requset,response) {
    var urlObj=url.parse(requset.url);
   // console.log(urlObj);
    var pathname=urlObj.pathname;
    console.log(pathname);
    if(pathname==='/img/img1.jpg'){
        var finalPath = path.join(__dirname, pathname);
        fs.readFile(finalPath,'binary',function (err,data) {
            response.end(data,'binary');
        })

    }
    else {
        response.statusCode = 404;
        response.end("文件未找到");
    }



});
server.listen(8080,function () {
    console.log("服务器一直在跑")
});