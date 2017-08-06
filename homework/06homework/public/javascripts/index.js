/**
 * Created by dllo on 17/8/6.
 */
var oForm = document.getElementById("theForm");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
oForm.onsubmit=function () {
    if(input1.value.indexOf(" ")!=-1){
        alert("用户名不能包含空格");
        return false;
    }
    if(input2.value.indexOf(" ")!=-1){
        alert("密码不能包含空格");
        return false;
    }
    if (input1.value == "" ) {
        alert("用户名不能为空");
        return false;
    }
    if ( input2.value == "") {
        alert("密码不能为空");
        return false;
    }

};
