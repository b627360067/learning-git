/**
 * Created by dllo on 17/8/1.
 */
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function (i, n, arr) {
    //  console.log(i);   //i是数组元素
    //  console.log(n);  n是数组下标
    //    console.log(arr);  arr是遍历后的数组

});


arr.map(function (i) { //参数是数组的每个元素
    // 对每个元素都可以进行自定义操作  例如平方,转化成字符串啊什么的
    return i * i;
});


arr.filter(function (i) {
    //和map差不多 但是是过滤 比如找出数组中大于2的
    return i > 2
});


var res = arr.some(function (i) {
    return i > 1;
});
// console.log(res);
//some 也是过滤的意思   但是他返回的是布尔值,我这里判断的是数组里有没有比1大的 如果有返回true
// 如果没有false,只要至少有一个返回值就可以了

var res2 = arr.every(function (i) {
    return i > 1;
});
// console.log(res2);
//与some是好基友  重复的就不说了 说一下区别吧  就是 every 得需要数组每一个元素都符合条件 不然就返回false


var res3 = arr.indexOf(5);
var res4 = arr.indexOf(7);
var res5 = arr.indexOf(2, 3);
// console.log(res3);
// console.log(res4);
// console.log(res5);
//查找数组中元素   有就返回下标 没有就返回-1 两个参数的时候 第二个是从哪个位置开始

var arr2 = [1, 1, 2, 4, 5, 6, 2];
var result = arr2.lastIndexOf(2, 7);
console.log(result);

var arr3 = [1, 2, 3, 4, 5];
//第一个参数是查找的元素  第二个参数是 从哪个位置开始   这个是查找2  从第七个开始从后往前找  找到第一个就返回  找不到就返回-1
var a=arr3.reduce(function (p1, p2, p3, arr3) {
    return p1 + p2;
});
console.log(a);
// reduce 有两个参数  第一个是回调函数  第二个是设置初始的 之前值 如果设置了就是设置了的值 如果没设置默认是数组第一个元素
// 我这里没有设置第二个参数 所以 初始值默认是p1  参与运算的第二个数是数组的除了初始值 从左开始依次进行的  p3是下标  p4是数组本身
// 运算如下  p1 +p2 =1+2=3  这个时候的结果3 是下一次的初始值
//         3 + 3=6   下次初始是6
//         6 + 4=10   下次初始是10
//        10 +5 =15   下次初始是15  当第二个参与运算的数没有了的是  就跳出循环  输出此时结果



var b=arr3.reduceRight(function (p1, p2, p3, p4) {
    return p1 -p2
});
console.log(b);
//reduceRight 与 reduce差不多  不同的是 他从数组末尾开始
//  5 - 4 =1
//  1-3=-2
//  -2 - 2=-4
// -4 - 1= -5
// 所以返回的是-5





