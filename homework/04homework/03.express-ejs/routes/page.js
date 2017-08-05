/**
 * Created by dllo on 17/8/3.
 */
var express=require('express');
var router=express.Router();
router.get('/',function (res,req) {
    //response渲染页面,views下对应的页面 这里是page
    req.render('page',{page:'扉页呀'})
});
module.exports=router;

