/**
 * Created by dllo on 17/8/5.
 */
var express=require('express');
var router=express.Router();
router.get('/', function(req, res, next) {
    res.render('loginSuccess');
});
module.exports=router;