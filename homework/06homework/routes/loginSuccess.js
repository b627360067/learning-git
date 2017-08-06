/**
 * Created by dllo on 17/8/6.
 */
var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var handleError=require('./handlerError');
var options={
    host:'localhost',
    port:3306,
    user:'root',
    password:''
};
var connect= mysql.createConnection(options);
connect.connect(function (err) {
    handleError('连接',err);
});
var useDBSQL='use login';

connect.query(useDBSQL,function (error) {
    handleError('使用数据库',error);
});


router.get('/', function(req,res,next) {
    // console.log(req.query);
    var username=req.query['userName'];
    var password=req.query['passWord'];
    // console.log(username);

    var selectSQL='select * from myLogin';
    connect.query(selectSQL,function (err,results) {
        if(!handleError('查询',err)){
            return;
        }
        //console.log(results);
        for(var i=0;i<results.length;i++){
            var UN=results[i]['userName'];
            var PW=results[i]['passWord'];
            if(username==UN&&password==PW){
                res.send('登录成功');
                return;
            }
            else {
                res.send('登录失败');return;
            }

        }



    });




});

module.exports = router;