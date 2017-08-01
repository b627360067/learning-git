/**
 * Created by dllo on 17/7/31.
 */
// var fs=require('fs');
// // 打开文件 不是文件夹
// var flags='a+';
// fs.open('./test.txt',flags,function(err,fd){
//     if (err) {
//         return;
//     }
//     console.log(fd);
// });
//
// // utimes 文件改变时,执行回调, atime是创建时间,mtime 是修改的时间
// var atime=1501500600;
// var mtime=1501500622;
// fs.utimes('./test.txt', atime, mtime, function(err){
//     if(err){
//         throw err;
//     }
//     console.log('a');
// });
// var options={
//     persistent:true,
//     interval:5007
// };
// //文件改变(修改 删除)时 才开始调用  一直处于监听状态
// fs.watchFile('./test.txt',options,function (curr,prev) {
//     console.log(curr.atime);
//     console.log(prev.atime);
// });
//
// //停止监听
// fs.unwatchFile('./test.txt',function (res) {
//    console.log(res);
// });
// //
//
// fs.link('./test.txt','./test.txt',function (err) {
//    console.log(err);
// });



var fs = require('fs');




// fs.open 打开文件,不是文件夹,如果要是没有这个文件,会自动创建
// 参数1:''文件路径
// 参数2:我的理解是和权限一样
// 'r' -   以读取模式打开文件。
// 'r+' - 以读写模式打开文件。
// 'rs' - 使用同步模式打开并读取文件。指示操作系统忽略本地文件系统缓存。
// 'rs+' - 以同步的方式打开，读取 并 写入文件。
// 注意：这不是让fs.open变成同步模式的阻塞操作。如果想要同步模式请使用fs.openSync()。
//
// 'w' - 以读取模式打开文件，如果文件不存在则创建
// 'wx' - 和 ' w ' 模式一样，如果文件存在则返回失败
// 'w+' - 以读写模式打开文件，如果文件不存在则创建
// 'wx+' - 和 ' w+ ' 模式一样，如果文件存在则返回失败
//
// 'a' - 以追加模式打开文件，如果文件不存在则创建
// 'ax' - 和 ' a ' 模式一样，如果文件存在则返回失败
// 'a+' - 以读取追加模式打开文件，如果文件不存在则创建
// 'ax+' - 和 ' a+ ' 模式一样，如果文件存在则返回失败
// mode    用于创建文件时给文件制定权限，默认0666
// 参数3:回调函数
fs.open('./test.txt','a+',function (error,fd) {
    console.log(fd);//fd返回的是1.txt里面的内容
});


// 改变指定的路径所指向的文件的文件时间戳
// 参数1:文件路径
// 参数2:访问时间
// 参数3:修改时间
// 参数4.回调函数
fs.utimes('./test.txt',Date.now(),Date.now(),function (error) {
    if(!error){
        console.log("成功");
    }else {
        console.error(error);
    }
});

// fs.watchFile(完整路径及文件名, [options]是interval单位haomiao, listener会在文件变化时回调);
// 对文件进行监视，并且在监视到文件被修改时执行处理
//
//
//
 var watchFile  =  fs.watchFile('./test.txt' ,{
    interval: 20
}, function(curr, prev) {
    if (Date.parse(prev.ctime) == 0) {
        console.log('文件被创建');
    } else if (Date.parse(curr.ctime) == 0) {
        console.log('文件被删除');
    } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
    }
});

// fs.unwatchFile(文件完整路径那个, 清除的监听器)
// 停止监视 filename 文件的变化。
// 如果指定了 listener则只移除特定的监听器。
//  否则，所有的监听器都会被移除，且已经有效地停止监视 filename。
// fs.unwatchFile('./1.txt', watchFile);
//
//
// fs.link(文件原来的路径, 新改变后的路径,然后恢复至一个同样的文件到这个路径里, 回调函数)
fs.link('./test.txt', './01新创举的', function (error) {
    if(!error){
         console.log("成功");
     }else {
         console.error(error);
     }
});

