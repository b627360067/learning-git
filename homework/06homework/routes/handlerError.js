/**
 * Created by dllo on 17/8/6.
 */
function handleError(message,error) {
    if(error){
        console.log(message+'失败');
       // console.log(error);
        return false;
    }
    else {
        console.log(message+'成功');
        return true;
    }

}
module.exports=handleError;